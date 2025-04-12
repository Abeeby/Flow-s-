import { MainLayout } from '@/components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsService() {
  // Données des types d'événements
  const eventTypes = [
    {
      id: 'mariage',
      name: 'Mariages',
      description: 'Offrez à vos invités une expérience culinaire unique avec notre service traiteur ou notre food truck.',
      image: '/services/event-mariage.jpg'
    },
    {
      id: 'anniversaire',
      name: 'Anniversaires',
      description: 'Des formules adaptées à tous les âges pour célébrer votre journée spéciale.',
      image: '/services/event-anniversaire.jpg'
    },
    {
      id: 'entreprise',
      name: 'Événements d\'entreprise',
      description: 'Séminaires, team building, inaugurations... Nous nous adaptons à vos besoins professionnels.',
      image: '/services/event-entreprise.jpg'
    },
    {
      id: 'festival',
      name: 'Festivals & Marchés',
      description: 'Notre food truck peut participer à vos événements publics et animer vos marchés.',
      image: '/services/event-festival.jpg'
    }
  ];

  // Données des formules
  const formules = [
    {
      name: 'Essentielle',
      price: '15€/personne',
      features: [
        'Choix de 2 plats principaux',
        'Accompagnements',
        'Eau plate et gazeuse',
        'Service simple'
      ]
    },
    {
      name: 'Complète',
      price: '25€/personne',
      features: [
        'Choix de 3 plats principaux',
        'Accompagnements variés',
        'Dessert maison',
        'Boissons non-alcoolisées',
        'Service et vaisselle inclus'
      ],
      highlight: true
    },
    {
      name: 'Prestige',
      price: '35€/personne',
      features: [
        'Menu sur mesure',
        'Entrées, plats et desserts',
        'Boissons au choix',
        'Service complet',
        'Installation et décoration'
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
            src="/services/events-hero.jpg"
            alt="Événements privés - FLOW"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Événements privés
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Une cuisine authentique pour vos moments spéciaux
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/services/events-intro.jpg"
                alt="Service événementiel FLOW"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Un service sur mesure</h2>
              <p className="text-lg text-gray-600 mb-6">
                FLOW vous accompagne dans l&apos;organisation de vos événements privés et professionnels.
                Que vous souhaitiez la présence de notre food truck ou un service traiteur complet, 
                nous nous adaptons à vos besoins et vos envies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Notre équipe passionnée mettra tout en œuvre pour faire de votre événement un moment inoubliable, 
                avec une cuisine fraîche, locale et de saison qui ravira vos convives.
              </p>
              <Link 
                href="/contact" 
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium transition-colors inline-block"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'événements Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos prestations événementielles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event) => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>
                  <Link 
                    href="/contact" 
                    className="text-green-600 hover:text-green-700 font-medium inline-flex items-center self-start"
                  >
                    En savoir plus
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formules Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Nos formules</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Nous proposons différentes formules adaptées à vos besoins et votre budget.
            Toutes nos formules sont personnalisables selon vos envies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formules.map((formule) => (
              <div 
                key={formule.name} 
                className={`bg-white rounded-lg p-8 ${formule.highlight ? 'shadow-xl border-2 border-green-500 relative' : 'shadow-md'}`}
              >
                {formule.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Recommandée
                  </div>
                )}
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">{formule.name}</h3>
                <div className="text-xl font-bold text-center text-green-600 mb-6">{formule.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {formule.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-md font-medium transition-colors ${
                    formule.highlight 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              Prix indicatifs pour un minimum de 20 personnes. Contactez-nous pour un devis personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos réalisations</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/services/realisation-${i}.jpg`}
                  alt={`Réalisation ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Ils nous ont fait confiance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-6">
                &quot;FLOW a assuré le buffet pour l&apos;inauguration de nos nouveaux locaux. Le service était impeccable, 
                les plats délicieux et nos clients ont été enchantés. Merci pour votre professionnalisme !&quot;
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-green-600">M</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Martin D.</h3>
                  <p className="text-sm text-gray-500">Directeur, Entreprise XYZ</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-6">
                &quot;Pour notre mariage, nous voulions quelque chose d&apos;original. Le food truck de FLOW a fait sensation ! 
                Les invités ont adoré le concept et la qualité des plats. Un grand merci à toute l&apos;équipe !&quot;
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-green-600">J</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Julie & Marc</h3>
                  <p className="text-sm text-gray-500">Mariage, juillet 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Questions fréquentes</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle est la zone géographique couverte ?</h3>
              <p className="text-gray-600">
                Nous intervenons principalement dans un rayon de 50 km autour de Paris. Pour des distances plus importantes, 
                des frais de déplacement supplémentaires peuvent s&apos;appliquer.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quel est le délai de réservation ?</h3>
              <p className="text-gray-600">
                Nous vous conseillons de réserver au moins 1 mois à l&apos;avance pour les événements importants. 
                Pour les petits événements, un délai de 2 semaines peut suffire, selon nos disponibilités.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Proposez-vous des options végétariennes/véganes ?</h3>
              <p className="text-gray-600">
                Oui, nous proposons une large gamme d&apos;options végétariennes et véganes. Nous pouvons également 
                adapter nos menus en fonction des allergies et des intolérances alimentaires.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment se déroule la facturation ?</h3>
              <p className="text-gray-600">
                Après acceptation du devis, nous demandons un acompte de 30%. Le solde est à régler le jour de l&apos;événement 
                ou dans les 7 jours suivants, selon les modalités convenues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à organiser votre événement ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <Link
            href="/contact"
            className="bg-white text-green-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </MainLayout>
  );
} 