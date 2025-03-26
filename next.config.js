/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  trailingSlash: true, // Ensures files are served properly

  async rewrites() {
    return [
      {
        source: '/googlea3a507fef4c4724e7.html',
        destination: '/public/googlea3a507fef4c4724e7.html',
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.cache = false;
    }
    return config;
  },
  optimizeFonts: false,
};

module.exports = nextConfig;
