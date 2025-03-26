/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisations pour Vercel
  swcMinify: true,
  // Configuration des images
  images: {
    domains: ['localhost', 'flow-food-truck.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
