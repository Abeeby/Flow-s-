import { MainLayout } from '@/components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

// Données factices pour les actualités
const news = [
  {
    id: 'news-1',
    title: 'Lancement de notre nouveau menu d\'été',
    excerpt: 'Découvrez nos nouvelles créations fraîches et légères pour la saison estivale.',
    content: 'Avec l\'arrivée des beaux jours, notre équipe a développé un tout nouveau menu d\'été mettant en avant les produits frais et locaux de saison. Salades croquantes, bowls colorés et desserts rafraîchissants vous attendent dans notre food truck !',
    image: '/news/menu-ete.jpg',
    date: '15 juin 2024',
    author: 'L\'équipe FLOW'
  },
  {
    id: 'news-2',
    title: 'FLOW participe au festival gastronomique',
    excerpt: 'Retrouvez-nous au grand festival gastronomique de la ville les 24, 25 et 26 juillet.',
    content: 'Nous sommes fiers de vous annoncer notre participation au festival gastronomique qui se tiendra au Parc des Expositions. Venez déguster nos spécialités et participer aux animations culinaires que nous avons préparées pour l\'occasion.',
    image: '/news/festival-gastronomique.jpg',
    date: '2 juin 2024',
    author: 'L\'équipe FLOW'
  },
  {
    id: 'news-3',
    title: 'Nouveaux emplacements pour notre food truck',
    excerpt: 'Dès le mois de juillet, retrouvez-nous dans de nouveaux quartiers de la ville.',
    content: 'Pour être au plus près de vous, nous avons prévu de nouveaux emplacements pour notre food truck. Consultez notre application mobile pour connaître notre planning et nous retrouver facilement. Nous serons notamment présents tous les mardis au marché du centre-ville et les jeudis soir sur la place de la mairie.',
    image: '/news/nouveaux-emplacements.jpg',
    date: '25 mai 2024',
    author: 'L\'équipe FLOW'
  },
  {
    id: 'news-4',
    title: 'Partenariat avec les producteurs locaux',
    excerpt: 'Nous renforçons notre engagement auprès des producteurs de notre région.',
    content: 'FLOW est fier d\'annoncer de nouveaux partenariats avec plusieurs producteurs locaux. Nos légumes bio proviennent désormais de la ferme des Quatre Saisons, nos fromages de la fromagerie artisanale du village, et nos viandes du boucher traditionnel qui travaille exclusivement avec des éleveurs respectueux du bien-être animal.',
    image: '/news/producteurs-locaux.jpg',
    date: '15 mai 2024',
    author: 'L\'équipe FLOW'
  },
  {
    id: 'news-5',
    title: 'Lancement de notre application mobile',
    excerpt: 'Suivez l\'emplacement de notre food truck et commandez en ligne grâce à notre nouvelle application.',
    content: 'Notre nouvelle application mobile est enfin disponible ! Téléchargez-la dès maintenant pour suivre l\'emplacement de notre food truck en temps réel, consulter notre menu, passer commande et même recevoir des offres exclusives. L\'application est disponible gratuitement sur App Store et Google Play.',
    image: '/news/app-mobile.jpg',
    date: '5 mai 2024',
    author: 'L\'équipe FLOW'
  },
];

export default function Actualites() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-green-600">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="relative h-full w-full">
          <Image
            src="/actualites-hero.jpg"
            alt="Actualités - FLOW"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Actualités
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Suivez toutes nos nouveautés et événements
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link 
                    href={`/actualites/${item.id}`}
                    className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                  >
                    Lire la suite
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

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Inscrivez-vous à notre newsletter</h2>
          <p className="text-lg text-gray-600 mb-8">
            Recevez nos dernières actualités, les emplacements du food truck et les plats de la semaine directement dans votre boîte mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow max-w-md"
              required
            />
            <button 
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium transition-colors"
            >
              S&apos;inscrire
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Nous respectons votre vie privée. Vous pouvez vous désinscrire à tout moment.
          </p>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Suivez-nous sur les réseaux sociaux</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Restez connectés et suivez notre aventure culinaire au quotidien. Partagez vos expériences avec le hashtag #FLOWfoodtruck
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a href="#" className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Latest Instagram Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Nos dernières publications Instagram</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <a key={i} href="#" className="block relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity">
                <Image
                  src={`/instagram/post-${i}.jpg`}
                  alt={`Instagram post ${i}`}
                  fill
                  className="object-cover"
                />
              </a>
            ))}
          </div>
          
          <div className="mt-8">
            <a 
              href="#" 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              Voir plus sur Instagram
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 