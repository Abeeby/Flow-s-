'use client';

import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { useCartStore } from '@/lib/store';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function CartPage() {
  const router = useRouter();
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  
  // Obtenir l'heure actuelle
  const now = new Date();
  const minDate = now.toISOString().split('T')[0];
  
  // Générer les options d'heure (de l'heure actuelle + 30min jusqu'à 22h par tranche de 15min)
  const generateTimeOptions = () => {
    const options = [];
    const startHour = now.getHours();
    const startMinute = Math.ceil(now.getMinutes() / 15) * 15 + 30; // Arrondir à 15min + 30min de préparation
    
    let hour = startHour;
    let minute = startMinute;
    
    // Ajuster si on dépasse 60 minutes
    if (minute >= 60) {
      hour += Math.floor(minute / 60);
      minute = minute % 60;
    }
    
    // Générer les options de l'heure actuelle jusqu'à 22h
    while (hour < 22 || (hour === 22 && minute === 0)) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      options.push(`${formattedHour}:${formattedMinute}`);
      
      minute += 15;
      if (minute >= 60) {
        hour += 1;
        minute = 0;
      }
    }
    
    return options;
  };
  
  const timeOptions = generateTimeOptions();
  
  const handleCheckout = async () => {
    if (!pickupDate || !pickupTime) {
      toast.error('Veuillez sélectionner une date et une heure de retrait');
      return;
    }
    
    setLoading(true);
    
    try {
      // Simuler un délai d'API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // TODO: Intégrer avec l'API pour passer la commande
      toast.success('Commande passée avec succès!');
      clearCart();
      router.push('/orders');
    } catch {
      toast.error('Une erreur est survenue lors de la commande');
    } finally {
      setLoading(false);
    }
  };
  
  const total = getTotal();

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Votre Panier</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-6">Votre panier est vide</p>
            <button
              onClick={() => router.push('/menu')}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md text-sm font-medium transition-colors"
            >
              Parcourir le menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Liste des produits */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.product.id} className="p-4 flex items-center">
                      <div className="flex-shrink-0 w-16 h-16 relative rounded-md overflow-hidden">
                        {item.product.image ? (
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Pas d&apos;image</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <h3 className="text-lg font-medium text-gray-800">{item.product.name}</h3>
                        <p className="text-sm text-gray-600">{item.product.price.toFixed(2)} € / unité</p>
                      </div>
                      
                      <div className="flex items-center">
                        <button 
                          onClick={() => item.quantity > 1 ? updateQuantity(item.product.id, item.quantity - 1) : removeItem(item.product.id)}
                          className="text-gray-500 hover:text-gray-700 p-1"
                        >
                          <MinusIcon className="h-5 w-5" />
                        </button>
                        
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-gray-700 p-1"
                        >
                          <PlusIcon className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="ml-4 flex-shrink-0 text-right">
                        <p className="text-lg font-medium text-gray-800">
                          {(item.product.price * item.quantity).toFixed(2)} €
                        </p>
                        <button 
                          onClick={() => removeItem(item.product.id)}
                          className="text-red-500 hover:text-red-700 mt-1"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="p-4 border-t border-gray-200 flex justify-between">
                  <button
                    onClick={() => clearCart()}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Vider le panier
                  </button>
                  
                  <button
                    onClick={() => router.push('/menu')}
                    className="text-green-600 hover:text-green-800 text-sm font-medium"
                  >
                    Continuer les achats
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              {/* Résumé de la commande */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Résumé de la commande</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sous-total</span>
                    <span className="text-gray-800">{total.toFixed(2)} €</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-green-600">{total.toFixed(2)} €</span>
                  </div>
                </div>
                
                {/* Date et heure de retrait */}
                <div className="mb-6">
                  <h3 className="text-md font-medium text-gray-800 mb-2">Date et heure de retrait</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="pickup-date" className="block text-sm text-gray-600 mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        id="pickup-date"
                        min={minDate}
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="pickup-time" className="block text-sm text-gray-600 mb-1">
                        Heure
                      </label>
                      <select
                        id="pickup-time"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Sélectionner une heure</option>
                        {timeOptions.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  disabled={loading || !pickupDate || !pickupTime}
                  className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                    loading || !pickupDate || !pickupTime
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700'
                  } transition-colors`}
                >
                  {loading ? 'Traitement en cours...' : 'Commander'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
} 