/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Optimisé pour Vercel
  trailingSlash: true, // Ajoute un slash à la fin des URLs pour éviter certains problèmes de routage
  // Configuration des images
  images: {
    domains: ['localhost', 'flow-food-truck.vercel.app', 'flow-s.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Gestion du routage
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/',
        destination: '/',
      },
    ];
  },
  // Assurez-vous que le transpileur pour TypeScript est activé
  typescript: {
    // !! ATTENTION !!
    // Ignorer les erreurs TypeScript pour le build de production
    // À utiliser uniquement pour déployer en urgence
    ignoreBuildErrors: true,
  },
  // Ignorer les erreurs ESLint pour le build de production
  eslint: {
    // !! ATTENTION !!
    // À utiliser uniquement pour déployer en urgence
    ignoreDuringBuilds: true,
  },
  basePath: '',
};

module.exports = nextConfig;
