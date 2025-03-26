'use client';

import React, { useState, useEffect } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { 
  ChartBarIcon, 
  ClipboardDocumentListIcon, 
  ShoppingBagIcon, 
  TrashIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// En attendant de créer les composants UI spécifiques
const TabsList = ({ children }: { children: React.ReactNode }) => (
  <div className="flex space-x-1 border-b border-gray-200 mb-6">{children}</div>
);

const TabsTrigger = ({ value, selected, onClick, children }: { value: string; selected: string; onClick: (value: string) => void; children: React.ReactNode }) => (
  <button
    className={`py-2 px-4 text-sm font-medium ${selected === value ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
    onClick={() => onClick(value)}
  >
    {children}
  </button>
);

const TabsContent = ({ value, selected, children }: { value: string; selected: string; children: React.ReactNode }) => (
  <div className={selected === value ? 'block' : 'hidden'}>{children}</div>
);

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [wastes, setWastes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    const loadData = async () => {
      setIsLoading(true);
      // Dans une implémentation réelle, ces données proviendraient d'appels API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOrders([]);
      setProducts([]);
      setIngredients([]);
      setWastes([]);
      setIsLoading(false);
    };

    loadData();
  }, [selectedTab]);

  return (
    <MainLayout userId="admin">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tableau de bord Admin</h1>
        
        <TabsList>
          <TabsTrigger value="dashboard" selected={selectedTab} onClick={setSelectedTab}>
            <ChartBarIcon className="h-5 w-5 mr-2 inline-block" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="orders" selected={selectedTab} onClick={setSelectedTab}>
            <ClipboardDocumentListIcon className="h-5 w-5 mr-2 inline-block" />
            Commandes
          </TabsTrigger>
          <TabsTrigger value="inventory" selected={selectedTab} onClick={setSelectedTab}>
            <ShoppingBagIcon className="h-5 w-5 mr-2 inline-block" />
            Inventaire
          </TabsTrigger>
          <TabsTrigger value="waste" selected={selectedTab} onClick={setSelectedTab}>
            <TrashIcon className="h-5 w-5 mr-2 inline-block" />
            Gestion des déchets
          </TabsTrigger>
        </TabsList>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <>
            <TabsContent value="dashboard" selected={selectedTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Commandes aujourd&apos;hui</h3>
                  <p className="text-3xl font-bold text-green-600">0</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Ventes aujourd&apos;hui</h3>
                  <p className="text-3xl font-bold text-green-600">0 €</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Ingrédients faibles</h3>
                  <p className="text-3xl font-bold text-yellow-500">0</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Déchets cette semaine</h3>
                  <p className="text-3xl font-bold text-red-500">0 kg</p>
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Statistiques des ventes</h3>
                <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                  <p className="text-gray-500">Graphique des ventes à implémenter</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="orders" selected={selectedTab}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">Commandes récentes</h3>
                </div>
                
                {orders.length === 0 ? (
                  <div className="p-6 text-center">
                    <p className="text-gray-500">Aucune commande trouvée</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Client
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Statut
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {/* Afficher les commandes ici */}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="inventory" selected={selectedTab}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800">Produits</h3>
                      <Link
                        href="/admin/products/new"
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        Ajouter un produit
                      </Link>
                    </div>
                    
                    {products.length === 0 ? (
                      <div className="p-6 text-center">
                        <p className="text-gray-500">Aucun produit trouvé</p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          {/* Table de produits */}
                        </table>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800">Ingrédients</h3>
                      <Link
                        href="/admin/ingredients/new"
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        Ajouter
                      </Link>
                    </div>
                    
                    {ingredients.length === 0 ? (
                      <div className="p-6 text-center">
                        <p className="text-gray-500">Aucun ingrédient trouvé</p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          {/* Table d'ingrédients */}
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="waste" selected={selectedTab}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Gestion des déchets</h3>
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Enregistrer un déchet
                  </button>
                </div>
                
                <div className="p-6">
                  <h4 className="text-md font-medium text-gray-800 mb-4">Enregistrer un nouvel élément gaspillé</h4>
                  
                  <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="ingredient" className="block text-sm text-gray-600 mb-1">
                        Ingrédient
                      </label>
                      <select
                        id="ingredient"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Sélectionner un ingrédient</option>
                        {/* Options d'ingrédients */}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="quantity" className="block text-sm text-gray-600 mb-1">
                        Quantité
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        min="0"
                        step="0.1"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="reason" className="block text-sm text-gray-600 mb-1">
                        Raison
                      </label>
                      <input
                        type="text"
                        id="reason"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    <div className="md:col-span-3">
                      <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        Enregistrer
                      </button>
                    </div>
                  </form>
                </div>
                
                {wastes.length === 0 ? (
                  <div className="p-6 text-center border-t border-gray-200">
                    <p className="text-gray-500">Aucun déchet enregistré</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      {/* Table de déchets */}
                    </table>
                  </div>
                )}
              </div>
            </TabsContent>
          </>
        )}
      </div>
    </MainLayout>
  );
} 