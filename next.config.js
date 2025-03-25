/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Add webpack configuration to handle caching more reliably
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Disable cache in development to prevent cache-related issues
      config.cache = false;
    }
    return config;
  },
  // Add font optimization configuration
  optimizeFonts: false, // Disable font optimization to prevent timeout issues
};

module.exports = nextConfig;