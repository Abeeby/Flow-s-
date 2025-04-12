/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Optimisé pour Vercel
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
};

module.exports = nextConfig;
