import React from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/lib/store';
import { useNotifications } from '@/lib/hooks/useNotifications';

export function Navbar({ userId }: { userId?: string }) {
  const { items } = useCartStore();
  const { unreadCount } = useNotifications(userId);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img
                className="h-12 w-auto"
                src="/logo.png"
                alt="FLOW - Cuisine de Saison"
              />
              <span className="ml-2 text-xl font-bold text-green-600">FLOW</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/menu" 
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Menu
            </Link>
            
            {userId ? (
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
            ) : (
              <Link 
                href="/auth/login" 
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium"
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
        </div>
      </div>
    </nav>
  );
} 