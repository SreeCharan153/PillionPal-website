/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.cache = false;  // Disable cache in dev
    }
    return config;
  },

  optimizeFonts: false, // Disable font optimization

  // Force static files like Google Verification HTML to be served properly
  async rewrites() {
    return [
      {
        source: '/google3a507fef4c4724e7.html',  // Replace with your exact file name
        destination: '/google3a507fef4c4724e7.html',
      },
    ]
  },
}

module.exports = nextConfig;
