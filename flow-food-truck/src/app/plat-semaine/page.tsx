import { MainLayout } from '@/components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function PlatSemaine() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-green-600">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="relative h-full w-full">
          <Image
            src="/plat-semaine-hero.jpg"
            alt="Plat de la semaine - FLOW"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Plat de la semaine
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Découvrez notre création hebdomadaire, à emporter et à déguster chez vous
          </p>
        </div>
      </section>

      {/* Comment ça marche Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Comment ça marche ?</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Chaque semaine, nous proposons un nouveau plat préparé avec des produits frais et de saison.
              Vous pouvez commander ce plat puis venir le chercher à notre food truck, avant de le réchauffer et de le déguster chez vous.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Commandez</h3>
                <p className="text-gray-600">
                  Réservez votre plat par téléphone ou via notre application mobile
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Récupérez</h3>
                <p className="text-gray-600">
                  Venez chercher votre plat à notre food truck aux horaires convenus
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Dégustez</h3>
                <p className="text-gray-600">
                  Réchauffez votre plat et savourez-le dans le confort de votre maison
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-4">
                Si vous souhaitez réserver, vous pouvez nous contacter directement :
              </p>
              <p className="text-xl font-bold text-green-600 mb-6">
                +33 6 12 34 56 78
              </p>
              <Link 
                href="tel:+33612345678" 
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors inline-block"
              >
                Réserver par téléphone
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plat actuel Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Notre plat de la semaine</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/plat-semaine-risotto.jpg"
                    alt="Risotto aux champignons"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-2">Risotto aux champignons</h3>
                <div className="text-2xl font-bold text-green-600 mb-4">15€</div>
                <p className="text-gray-600 mb-6">
                  Semaine 20: Délicieux risotto aux champignons des bois, parsemé de parmesan et agrémenté d&apos;une touche de truffe.
                  Dans un contenant écologique et réutilisable.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Ingrédients principaux :</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Riz arborio</li>
                    <li>Champignons des bois</li>
                    <li>Parmesan affiné</li>
                    <li>Huile de truffe</li>
                    <li>Bouillon maison</li>
                  </ul>
                </div>
                <Link 
                  href="tel:+33612345678" 
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full text-lg font-semibold transition-colors inline-block"
                >
                  Commander maintenant
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Nous utilisons des contenants écologiques et réutilisables pour tous nos plats à emporter.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="bg-white p-4 rounded-lg shadow-sm inline-flex items-center">
                <Image
                  src="/icon-eco.png"
                  alt="Écologique"
                  width={40}
                  height={40}
                  className="mr-3"
                />
                <span className="text-gray-700">Écologique</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm inline-flex items-center">
                <Image
                  src="/icon-recyclable.png"
                  alt="Recyclable"
                  width={40}
                  height={40}
                  className="mr-3"
                />
                <span className="text-gray-700">Recyclable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Plats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Plats des semaines précédentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/plat-previous-1.jpg"
                  alt="Tajine de poulet aux olives"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tajine de poulet aux olives</h3>
                <p className="text-gray-600 mb-4">
                  Semaine 19: Tajine de poulet mijoté avec olives et citrons confits, accompagné de semoule aux épices.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/plat-previous-2.jpg"
                  alt="Lasagnes aux légumes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lasagnes aux légumes</h3>
                <p className="text-gray-600 mb-4">
                  Semaine 18: Lasagnes aux légumes de saison, sauce béchamel légère et fromage italien.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/plat-previous-3.jpg"
                  alt="Saumon teriyaki"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Saumon teriyaki</h3>
                <p className="text-gray-600 mb-4">
                  Semaine 17: Pavé de saumon laqué sauce teriyaki, riz japonais et légumes croquants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commander ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant le plat de la semaine et venez le récupérer quand vous le souhaitez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+33612345678"
              className="bg-white text-green-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Commander par téléphone
            </Link>
            <Link
              href="/menu"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Voir tout le menu
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 