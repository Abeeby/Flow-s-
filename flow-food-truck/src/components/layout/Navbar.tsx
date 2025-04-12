'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/lib/store';
import { useNotifications } from '@/lib/hooks/useNotifications';

export function Navbar({ userId }: { userId?: string }) {
  const { items } = useCartStore();
  const { unreadCount } = useNotifications(userId);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img
                className="h-16 w-auto"
                src="/logo.png"
                alt="FLOW - Cuisine de Saison"
              />
              <span className="ml-2 text-2xl font-bold text-green-600">FLOW</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/menu" 
              className="text-gray-700 hover:text-green-600 px-4 py-2 rounded-md text-sm font-medium"
            >
              Menu
            </Link>
            
            <Link 
              href="/plat-semaine" 
              className="text-gray-700 hover:text-green-600 px-4 py-2 rounded-md text-sm font-medium"
            >
              Plat de la semaine
            </Link>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 px-4 py-2 rounded-md text-sm font-medium flex items-center">
                Prestations
                <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link 
                  href="/services/foodtruck" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                >
                  Food Truck
                </Link>
                <Link 
                  href="/services/events" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                >
                  Événements privés
                </Link>
                <Link 
                  href="/plat-semaine" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                >
                  Plat à emporter
                </Link>
              </div>
            </div>
            
            <Link 
              href="/actualites" 
              className="text-gray-700 hover:text-green-600 px-4 py-2 rounded-md text-sm font-medium"
            >
              Actualités
            </Link>
            
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-green-600 px-4 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            
            {userId && (
              <>
                <Link 
                  href="/orders" 
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Commandes
                </Link>
                
                <Link 
                  href="/notifications" 
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <div className="relative">
                    <BellIcon className="h-6 w-6" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </div>
                </Link>
                
                <Link 
                  href="/profile" 
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <UserIcon className="h-6 w-6" />
                </Link>
              </>
            )}
            
            {!userId && (
              <Link 
                href="/auth/login" 
                className="ml-2 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Connexion
              </Link>
            )}
            
            <Link 
              href="/cart" 
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              <div className="relative">
                <ShoppingCartIcon className="h-6 w-6" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <Link 
              href="/cart" 
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium mr-2"
            >
              <div className="relative">
                <ShoppingCartIcon className="h-6 w-6" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </div>
            </Link>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="px-4 space-y-1">
            <Link 
              href="/menu" 
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </Link>
            
            <Link 
              href="/plat-semaine" 
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Plat de la semaine
            </Link>
            
            <div className="border-t border-gray-100 my-2"></div>
            
            <div className="text-gray-700 px-3 py-1 text-sm font-semibold">
              Prestations
            </div>
            
            <Link 
              href="/services/foodtruck" 
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium pl-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Food Truck
            </Link>
            
            <Link 
              href="/services/events" 
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium pl-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Événements privés
            </Link>
            
            <Link 
              href="/plat-semaine" 
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium pl-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Plat à emporter
            </Link>
            
            <div className="border-t border-gray-100 my-2"></div>
            
            <Link 
              href="/actualites" 
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Actualités
            </Link>
            
            <Link 
              href="/contact" 
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {userId ? (
              <>
                <div className="border-t border-gray-100 my-2"></div>
                
                <Link 
                  href="/orders" 
                  className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mes commandes
                </Link>
                
                <Link 
                  href="/notifications" 
                  className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Notifications {unreadCount > 0 && `(${unreadCount})`}
                </Link>
                
                <Link 
                  href="/profile" 
                  className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mon profil
                </Link>
              </>
            ) : (
              <>
                <div className="border-t border-gray-100 my-2"></div>
                
                <Link 
                  href="/auth/login" 
                  className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Connexion
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
} 