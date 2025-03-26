import { Product } from '@prisma/client';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useCartStore } from '@/lib/store';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { items, addItem, removeItem, updateQuantity } = useCartStore();
  
  const cartItem = items.find(item => item.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Pas d&apos;image</span>
          </div>
        )}
        {!product.available && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Non disponible</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <span className="text-green-600 font-bold">{product.price.toFixed(2)} €</span>
        </div>
        
        <p className="text-gray-600 text-sm mt-2 h-12 overflow-hidden">
          {product.description}
        </p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500 capitalize">{product.category}</span>
          
          {product.available ? (
            <div className="flex items-center">
              {quantity > 0 ? (
                <>
                  <button 
                    onClick={() => quantity === 1 ? removeItem(product.id) : updateQuantity(product.id, quantity - 1)}
                    className="bg-green-100 text-green-600 p-1 rounded-full"
                  >
                    <MinusIcon className="h-5 w-5" />
                  </button>
                  
                  <span className="mx-2 w-6 text-center">{quantity}</span>
                  
                  <button 
                    onClick={() => addItem(product)}
                    className="bg-green-600 text-white p-1 rounded-full"
                  >
                    <PlusIcon className="h-5 w-5" />
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => addItem(product)}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
                >
                  Ajouter
                </button>
              )}
            </div>
          ) : (
            <span className="text-red-600 text-sm font-medium">Indisponible</span>
          )}
        </div>
      </div>
    </div>
  );
} 