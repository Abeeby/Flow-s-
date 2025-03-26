import { OrderItem } from '@prisma/client';
import prisma from '../prisma';

/**
 * Vérifie si un produit est disponible en stock
 */
export async function checkProductAvailability(productId: string): Promise<boolean> {
  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: { ingredients: true }
  });

  if (!product) return false;
  
  // Vérifier si chaque ingrédient est disponible en quantité suffisante
  for (const ingredient of product.ingredients) {
    if (ingredient.quantity <= 0) {
      return false;
    }
  }

  return true;
}

/**
 * Met à jour le stock après une commande
 */
export async function updateStockAfterOrder(orderItems: OrderItem[]): Promise<void> {
  for (const item of orderItems) {
    const product = await prisma.product.findUnique({
      where: { id: item.productId },
      include: { ingredients: true }
    });

    if (!product) continue;

    // Réduire la quantité de chaque ingrédient utilisé dans le produit
    for (const ingredient of product.ingredients) {
      await prisma.ingredient.update({
        where: { id: ingredient.id },
        data: {
          quantity: {
            decrement: ingredient.quantity * item.quantity
          }
        }
      });
    }
  }
}

/**
 * Enregistre les déchets d'ingrédients
 */
export async function recordWaste(ingredientName: string, quantity: number, reason?: string): Promise<void> {
  await prisma.waste.create({
    data: {
      ingredientName,
      quantity,
      reason
    }
  });

  // Mettre à jour la quantité gaspillée dans l'ingrédient
  const ingredient = await prisma.ingredient.findFirst({
    where: { name: ingredientName }
  });

  if (ingredient) {
    await prisma.ingredient.update({
      where: { id: ingredient.id },
      data: {
        wasted: {
          increment: quantity
        }
      }
    });
  }
}

/**
 * Obtient des statistiques sur les ingrédients consommés
 */
export async function getIngredientConsumptionStats(startDate: Date, endDate: Date) {
  // Récupérer toutes les commandes dans la période donnée
  const orders = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate
      },
      status: 'COMPLETED'
    },
    include: {
      items: {
        include: {
          product: {
            include: {
              ingredients: true
            }
          }
        }
      }
    }
  });

  // Calculer la consommation d'ingrédients
  const ingredientConsumption: Record<string, number> = {};

  for (const order of orders) {
    for (const item of order.items) {
      for (const ingredient of item.product.ingredients) {
        const consumedAmount = ingredient.quantity * item.quantity;
        
        if (ingredientConsumption[ingredient.name]) {
          ingredientConsumption[ingredient.name] += consumedAmount;
        } else {
          ingredientConsumption[ingredient.name] = consumedAmount;
        }
      }
    }
  }

  return ingredientConsumption;
} 