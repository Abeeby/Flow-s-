import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  // Créer un utilisateur admin
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@flow-food.com' },
    update: {},
    create: {
      email: 'admin@flow-food.com',
      name: 'Admin',
      password: adminPassword,
      role: 'ADMIN',
    },
  });
  console.log(`Created admin user: ${admin.name}`);

  // Créer un utilisateur client
  const userPassword = await bcrypt.hash('user123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'client@example.com' },
    update: {},
    create: {
      email: 'client@example.com',
      name: 'Client Test',
      password: userPassword,
      role: 'CLIENT',
    },
  });
  console.log(`Created client user: ${user.name}`);

  // Créer des ingrédients
  const ingredients = [
    { name: 'Tomates', quantity: 50, unit: 'kg' },
    { name: 'Laitue', quantity: 30, unit: 'kg' },
    { name: 'Pain', quantity: 100, unit: 'pièces' },
    { name: 'Fromage', quantity: 25, unit: 'kg' },
    { name: 'Poulet', quantity: 35, unit: 'kg' },
    { name: 'Boeuf', quantity: 40, unit: 'kg' },
    { name: 'Riz', quantity: 50, unit: 'kg' },
    { name: 'Oignons', quantity: 20, unit: 'kg' },
  ];

  for (const ingredient of ingredients) {
    // Vérifier si l'ingrédient existe déjà avec ce nom et cette unité
    const existingIngredient = await prisma.ingredient.findFirst({
      where: {
        name: ingredient.name,
        unit: ingredient.unit
      }
    });

    if (!existingIngredient) {
      await prisma.ingredient.create({
        data: {
          name: ingredient.name,
          quantity: ingredient.quantity,
          unit: ingredient.unit,
        }
      });
    }
  }
  console.log(`Processed ${ingredients.length} ingredients`);

  // Créer des produits
  const burgerIngredients = await prisma.ingredient.findMany({
    where: { 
      name: { 
        in: ['Pain', 'Fromage', 'Tomates', 'Laitue', 'Boeuf'] 
      } 
    },
  });

  const saladIngredients = await prisma.ingredient.findMany({
    where: { 
      name: { 
        in: ['Laitue', 'Tomates', 'Poulet', 'Fromage'] 
      } 
    },
  });

  const riceIngredient = await prisma.ingredient.findFirst({
    where: { name: 'Riz' }
  });

  // Vérifier si les produits existent déjà
  const existingBurger = await prisma.product.findFirst({
    where: { name: 'Burger Classique' }
  });

  const existingSalad = await prisma.product.findFirst({
    where: { name: 'Salade César' }
  });

  const existingRisotto = await prisma.product.findFirst({
    where: { name: 'Risotto aux champignons' }
  });

  if (!existingBurger) {
    await prisma.product.create({
      data: {
        name: 'Burger Classique',
        description: 'Burger avec steak de boeuf, fromage, tomates et salade',
        price: 9.99,
        category: 'Burgers',
        available: true,
        ingredients: {
          connect: burgerIngredients.map(ing => ({ id: ing.id }))
        }
      }
    });
    console.log('Created Burger Classique');
  }

  if (!existingSalad) {
    await prisma.product.create({
      data: {
        name: 'Salade César',
        description: 'Salade fraîche avec poulet grillé, parmesan et sauce césar maison',
        price: 8.99,
        category: 'Salades',
        available: true,
        ingredients: {
          connect: saladIngredients.map(ing => ({ id: ing.id }))
        }
      }
    });
    console.log('Created Salade César');
  }

  if (!existingRisotto && riceIngredient) {
    await prisma.product.create({
      data: {
        name: 'Risotto aux champignons',
        description: 'Risotto crémeux aux champignons et parmesan',
        price: 11.99,
        category: 'Plats',
        available: true,
        ingredients: {
          connect: [{ id: riceIngredient.id }]
        }
      }
    });
    console.log('Created Risotto aux champignons');
  }

  console.log('Database seeding completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 