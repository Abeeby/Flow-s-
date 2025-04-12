import { MainLayout } from '@/components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
  // Données des catégories de menu
  const categories = [
    {
      id: 'burgers',
      name: 'Burgers',
      items: [
        {
          id: 'burger-1',
          name: 'Le Classique',
          description: 'Steak haché de bœuf local, fromage de la région, salade, tomate, oignons rouges, sauce maison',
          price: 14.50,
          image: '/menu/burger-classique.jpg'
        },
        {
          id: 'burger-2',
          name: 'Le Végétarien',
          description: 'Galette de légumes, fromage de chèvre, roquette, tomates confites, sauce aux herbes',
          price: 13.50,
          image: '/menu/burger-veggie.jpg'
        },
        {
          id: 'burger-3',
          name: 'Le Montagnard',
          description: 'Steak haché de bœuf local, fromage raclette, lard fumé, oignons caramélisés, sauce moutarde et miel',
          price: 16.50,
          image: '/menu/burger-montagnard.jpg'
        },
      ]
    },
    {
      id: 'salades',
      name: 'Salades',
      items: [
        {
          id: 'salade-1',
          name: 'Salade du Marché',
          description: 'Mélange de jeunes pousses, légumes de saison, graines torréfiées, vinaigrette maison',
          price: 10.50,
          image: '/menu/salade-marche.jpg'
        },
        {
          id: 'salade-2',
          name: 'Bowl Méditerranéen',
          description: 'Quinoa, concombre, tomates cerise, feta, olives, sauce au yaourt',
          price: 12.50,
          image: '/menu/bowl-mediterraneen.jpg'
        },
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      items: [
        {
          id: 'dessert-1',
          name: 'Mousse au chocolat',
          description: 'Mousse légère au chocolat noir, crumble de spéculoos',
          price: 5.50,
          image: '/menu/mousse-chocolat.jpg'
        },
        {
          id: 'dessert-2',
          name: 'Tarte aux fruits de saison',
          description: 'Pâte sablée maison, crème pâtissière légère, fruits frais de saison',
          price: 6.00,
          image: '/menu/tarte-fruits.jpg'
        },
      ]
    },
    {
      id: 'boissons',
      name: 'Boissons',
      items: [
        {
          id: 'boisson-1',
          name: 'Limonade maison',
          description: 'Citron pressé, sucre de canne, menthe fraîche, eau pétillante',
          price: 4.00,
          image: '/menu/limonade.jpg'
        },
        {
          id: 'boisson-2',
          name: 'Thé glacé maison',
          description: 'Thé noir infusé, fruits de saison, sirop maison',
          price: 4.00,
          image: '/menu/the-glace.jpg'
        },
      ]
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-green-600">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="relative h-full w-full">
          <Image
            src="/menu-hero.jpg"
            alt="Menu du Foodtruck - FLOW"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Carte du Foodtruck
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Découvrez nos délicieuses créations préparées avec des produits frais et locaux
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Notre carte évolue au fil des saisons pour vous proposer des plats préparés avec des produits frais, 
              locaux et de qualité. Tous nos plats sont préparés sur place dans notre foodtruck.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <a 
                  key={category.id} 
                  href={`#${category.id}`}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          {/* Menu Categories */}
          {categories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16 scroll-mt-24">
              <div className="border-b border-gray-200 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 pb-4">{category.name}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                        <span className="text-lg font-bold text-green-600">{item.price.toFixed(2)}€</span>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="mt-auto">
                        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                          Ajouter au panier
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Labels Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Nos engagements</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-3">
                <Image
                  src="/label-bio.png"
                  alt="Produits Bio"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">Produits bio et locaux</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-3">
                <Image
                  src="/label-local.png"
                  alt="Circuit Court"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">Circuit court garanti</p>
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
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-3">
                <Image
                  src="/label-fait-maison.png"
                  alt="Fait Maison"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">Tout est fait maison</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emplacement Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Où nous trouver ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Retrouvez notre foodtruck à différents emplacements selon les jours de la semaine. 
              Consultez notre application mobile pour connaître notre emplacement en temps réel.
            </p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            {/* Intégration de Google Maps ou similaire */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Carte de localisation à intégrer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commander ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Commandez en ligne ou téléchargez notre application pour suivre notre emplacement en temps réel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cart"
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
    </MainLayout>
  );
} 