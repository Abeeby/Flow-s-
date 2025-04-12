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
            Plongez dans l'authenticité culinaire avec notre foodtruck et nos délicieux plats de saison.
          </p>
          <Link 
            href="/menu" 
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors"
          >
            Voir notre menu
          </Link>
        </div>
      </section>

      {/* Qui suis-je Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Qui suis-je ?</h2>
            <h3 className="text-2xl font-semibold text-gray-700">Chef passionné de cuisine</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">10</div>
              <p className="text-gray-700">Années d'expérience</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">15</div>
              <p className="text-gray-700">Recettes signatures</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <p className="text-gray-700">Clients satisfaits 🙂</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">FLOW FOOD TRUCK</h2>
            <h3 className="text-2xl font-semibold text-gray-700">Foodtruck et cuisine de saison</h3>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Savourez l'excellence culinaire avec FLOW Food Truck ! Nous vous régalons avec nos plats frais et de saison, 
              préparés avec des produits locaux de qualité. Découvrez notre carte et nos spécialités hebdomadaires.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/menu" 
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors inline-block"
            >
              Menu du Food Truck
            </Link>
          </div>
        </div>
      </section>

      {/* Mes Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">MES SERVICES</h2>
            <h3 className="text-2xl font-semibold text-gray-700">Une offre complète pour tous vos besoins</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="h-40 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Food Truck</h3>
              <p className="text-gray-600 mb-4">
                Nous sillonnons la région avec notre Food Truck pour vous proposer des plats frais et délicieux préparés sous vos yeux.
              </p>
              <Link 
                href="/services/foodtruck" 
                className="text-green-600 hover:text-green-700 font-medium"
              >
                En savoir plus
              </Link>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="h-40 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Événements privés</h3>
              <p className="text-gray-600 mb-4">
                Anniversaires, mariages, réunions d'entreprise... Nous nous déplaçons pour rendre vos événements inoubliables.
              </p>
              <Link 
                href="/services/events" 
                className="text-green-600 hover:text-green-700 font-medium"
              >
                En savoir plus
              </Link>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="h-40 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Plat de la semaine</h3>
              <p className="text-gray-600 mb-4">
                Découvrez chaque semaine une nouvelle création à emporter, préparée avec des produits frais et de saison.
              </p>
              <Link 
                href="/plat-semaine" 
                className="text-green-600 hover:text-green-700 font-medium"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plat de la semaine Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">PLAT DE LA SEMAINE</h2>
            <h3 className="text-2xl font-semibold">Il n'y a plus qu'à réchauffer</h3>
          </div>
          
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-2">Risotto aux champignons</h4>
            <div className="text-2xl font-bold text-green-600 mb-4">15€</div>
            <p className="text-gray-600 mb-6">
              Semaine 20: Délicieux risotto aux champignons des bois, parsemé de parmesan et agrémenté d'une touche de truffe.
              Dans un contenant écologique et réutilisable.
            </p>
            <Link 
              href="/reserver" 
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors inline-block"
            >
              Réserver par téléphone
            </Link>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Téléchargez notre application</h2>
              <p className="text-lg text-gray-600 mb-6">
                Découvrez notre menu hebdomadaire et l'emplacement de notre food truck via notre application.
                Recevez des notifications pour ne rien manquer!
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Consultez le menu et passez commande en ligne
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Consultez l'emplacement du Food Truck
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Consultez le plat de la semaine
                </li>
              </ul>
              <div className="flex space-x-4">
                <Link href="#" className="block">
                  <Image
                    src="/app-store-badge.png"
                    alt="Disponible sur App Store"
                    width={140}
                    height={42}
                  />
                </Link>
                <Link href="#" className="block">
                  <Image
                    src="/google-play-badge.png"
                    alt="Disponible sur Google Play"
                    width={140}
                    height={42}
                  />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/app-mockup.png"
                  alt="Application mobile Flow Food Truck"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Labels et récompenses Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">LABELS ET RÉCOMPENSES</h2>
            <h3 className="text-2xl font-semibold text-gray-700">Notre engagement pour la qualité</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-3">
                <Image
                  src="/label-bio.png"
                  alt="Label Bio"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">Produits bio et locaux</p>
              <Link href="#" className="text-green-600 text-sm font-medium hover:underline">En savoir plus</Link>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-3">
                <Image
                  src="/label-local.png"
                  alt="Produits Locaux"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">Circuit court garanti</p>
              <Link href="#" className="text-green-600 text-sm font-medium hover:underline">En savoir plus</Link>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-3">
                <Image
                  src="/label-eco.png"
                  alt="Éco-responsable"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">Emballages écologiques</p>
              <Link href="#" className="text-green-600 text-sm font-medium hover:underline">En savoir plus</Link>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-3">
                <Image
                  src="/award-cuisine.png"
                  alt="Prix d'excellence"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">Primé au concours de la street food</p>
              <Link href="#" className="text-green-600 text-sm font-medium hover:underline">En savoir plus</Link>
            </div>
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
            <p className="text-gray-600 text-lg mb-2">Consultez l'emplacement de notre Food Truck sur la carte</p>
            <p className="text-gray-800 text-xl font-semibold">Différents emplacements selon les jours de la semaine</p>
            <p className="text-gray-600 mt-4">
              Consultez notre application ou nos réseaux sociaux pour connaître nos emplacements et horaires en temps réel.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
