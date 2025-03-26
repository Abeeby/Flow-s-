import { MainLayout } from '@/components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-green-600">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="relative h-full w-full">
        <Image
            src="/hero-image.jpg"
            alt="FLOW - Cuisine de Saison"
            fill
          priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <Image
            src="/logo.png"
            alt="FLOW Logo"
            width={250}
            height={250}
            className="mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            FLOW <span className="text-green-300">Cuisine de Saison</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Découvrez notre cuisine fraîche, locale et de saison, directement depuis notre food truck.
          </p>
          <Link 
            href="/menu" 
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors"
          >
            Voir notre menu
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Pourquoi choisir FLOW ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Produits frais</h3>
              <p className="text-gray-600">
                Nous privilégions des produits locaux et de saison pour vous offrir une expérience gustative authentique.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Commande rapide</h3>
              <p className="text-gray-600">
                Gagnez du temps en commandant en ligne et récupérez votre commande quand elle est prête.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Qualité garantie</h3>
              <p className="text-gray-600">
                Des plats préparés avec soin par nos chefs, avec une attention particulière à la qualité et au goût.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à découvrir nos plats ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Commandez en ligne dès maintenant et venez récupérer votre repas à notre food truck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-white text-green-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Commander maintenant
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Où nous trouver</h2>
          
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            {/* Ici, vous pouvez intégrer une carte Google Maps ou similaire */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Carte de localisation à intégrer</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg mb-2">Notre adresse habituelle :</p>
            <p className="text-gray-800 text-xl font-semibold">Place du Marché, 75001 Paris</p>
            <p className="text-gray-600 mt-4">
              Consultez nos réseaux sociaux pour connaître nos emplacements et horaires en temps réel.
            </p>
          </div>
    </div>
      </section>
    </MainLayout>
  );
}
