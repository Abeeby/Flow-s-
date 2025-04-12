import { MainLayout } from '@/components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  // Données des services
  const services = [
    {
      id: 'foodtruck',
      title: 'Food Truck',
      description: 'Nous sillonnons la région avec notre Food Truck pour vous proposer des plats frais et délicieux préparés sous vos yeux.',
      image: '/services/foodtruck.jpg',
      link: '/services/foodtruck'
    },
    {
      id: 'events',
      title: 'Événements privés',
      description: 'Anniversaires, mariages, réunions d&apos;entreprise... Nous nous déplaçons pour rendre vos événements inoubliables.',
      image: '/services/events.jpg',
      link: '/services/events'
    },
    {
      id: 'plat-emporter',
      title: 'Plat à emporter',
      description: 'Découvrez chaque semaine une nouvelle création à emporter, préparée avec des produits frais et de saison.',
      image: '/services/plat-emporter.jpg',
      link: '/plat-semaine'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-green-600">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="relative h-full w-full">
          <Image
            src="/services-hero.jpg"
            alt="Nos prestations - FLOW"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Nos prestations
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Un ensemble de services pour répondre à tous vos besoins culinaires
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">FLOW - Cuisine de Saison</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Nous vous proposons plusieurs prestations pour satisfaire toutes vos envies gourmandes. 
            Que ce soit dans notre food truck, pour vos événements privés ou avec nos plats à emporter, 
            nous mettons tout notre savoir-faire à votre service.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col h-full">
                <div className="relative h-64 rounded-t-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col bg-white p-6 shadow-md rounded-b-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Link 
                    href={service.link}
                    className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md text-center font-medium transition-colors"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Pourquoi nous choisir ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Produits locaux</h3>
              <p className="text-gray-600">
                Nous travaillons en direct avec des producteurs locaux pour vous garantir des produits frais et de qualité.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Fait maison</h3>
              <p className="text-gray-600">
                Tous nos plats sont préparés maison, avec des recettes élaborées par notre chef.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Éco-responsable</h3>
              <p className="text-gray-600">
                Nous utilisons des contenants recyclables et limitons notre impact sur l&apos;environnement.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Flexibilité</h3>
              <p className="text-gray-600">
                Nous nous adaptons à vos besoins et contraintes, quel que soit le type d&apos;événement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Ce que disent nos clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-green-600">S</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Sophie M.</h3>
                  <p className="text-sm text-gray-500">Mariage, juin 2024</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;FLOW a assuré le service traiteur pour notre mariage et ce fut une expérience exceptionnelle. 
                Les invités ont adoré la qualité et l&apos;originalité des plats. Service impeccable !&quot;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-green-600">T</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Thomas L.</h3>
                  <p className="text-sm text-gray-500">Repas d&apos;entreprise, mai 2024</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Notre équipe a été enchantée par la prestation de FLOW lors de notre journée d&apos;entreprise. 
                Des saveurs exceptionnelles et un service très professionnel.&quot;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-green-600">E</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Emma D.</h3>
                  <p className="text-sm text-gray-500">Client régulier</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Je commande régulièrement le plat de la semaine et je n&apos;ai jamais été déçue. 
                Des recettes variées et toujours savoureuses, avec des produits de saison.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à découvrir nos services ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour discuter de votre projet ou découvrir nos prestations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Nous contacter
            </Link>
            <Link
              href="/menu"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Voir notre menu
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 