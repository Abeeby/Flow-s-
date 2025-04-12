/** @type {import('next').NextConfig} */
const nextConfig = {
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
