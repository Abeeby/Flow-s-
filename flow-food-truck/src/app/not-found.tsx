import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Non Trouvée</h2>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
        Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link 
        href="/" 
        className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full 
                  text-lg font-semibold transition-colors inline-block"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
} 