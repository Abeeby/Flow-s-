import React from 'react';
import { Suspense } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProductCard } from '@/components/ui/ProductCard';
import prisma from '@/lib/prisma';

// Récupération des produits
async function getProducts() {
  const products = await prisma.product.findMany({
    include: {
      ingredients: true
    },
    orderBy: {
      category: 'asc'
    }
  });
  
  return products;
}

export default async function MenuPage() {
  const products = await getProducts();
  
  // Regrouper les produits par catégorie
  const productsByCategory = products.reduce((acc, product) => {
    const category = product.category;
    
    if (!acc[category]) {
      acc[category] = [];
    }
    
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);
  
  // Obtenir toutes les catégories
  const categories = Object.keys(productsByCategory);

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Notre Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de plats frais et de saison, préparés avec amour par notre équipe.
          </p>
        </div>
        
        {/* Filtres de catégories */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category}`}
              className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-full text-sm font-medium transition-colors"
            >
              {category}
            </a>
          ))}
        </div>
        
        {/* Liste des produits par catégorie */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} id={category} className="scroll-mt-20">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Suspense fallback={<p>Chargement des produits...</p>}>
                  {productsByCategory[category].map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </Suspense>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
} 