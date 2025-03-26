import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { updateStockAfterOrder } from '@/lib/utils/stock';

type CartItem = {
  product: {
    id: string;
    price: number;
  };
  quantity: number;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, items, total, pickupDate, pickupTime } = body;
    
    if (!userId || !items || !total || !pickupDate || !pickupTime) {
      return NextResponse.json(
        { error: 'Informations manquantes pour la commande' },
        { status: 400 }
      );
    }
    
    // Vérifier que l'utilisateur existe
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });
    
    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }
    
    // Créer la commande
    const order = await prisma.order.create({
      data: {
        userId,
        total,
        status: 'PENDING',
        estimatedTime: 30, // 30 minutes par défaut
        items: {
          create: items.map((item: CartItem) => ({
            productId: item.product.id,
            quantity: item.quantity,
            price: item.product.price
          }))
        }
      },
      include: {
        items: true
      }
    });
    
    // Mettre à jour le stock
    await updateStockAfterOrder(order.items);
    
    // Créer une notification pour l'administrateur
    await prisma.notification.create({
      data: {
        userId: 'admin-user-id', // ID de l'administrateur (à remplacer par l'ID réel)
        message: `Nouvelle commande #${order.id} reçue pour un montant de ${total.toFixed(2)} €`,
      }
    });
    
    // Créer une notification pour le client
    await prisma.notification.create({
      data: {
        userId,
        message: `Votre commande #${order.id} a été reçue et est en cours de préparation.`,
      }
    });
    
    return NextResponse.json(
      { 
        success: true, 
        order: { 
          id: order.id, 
          status: order.status, 
          estimatedTime: order.estimatedTime 
        } 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Erreur lors de la création de la commande:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la création de la commande' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json(
        { error: 'ID utilisateur requis' },
        { status: 400 }
      );
    }
    
    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(orders);
    
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la récupération des commandes' },
      { status: 500 }
    );
  }
} 