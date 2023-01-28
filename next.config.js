/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  webpack: (config) => {
    // understand absolute paths on importing
    config.resolve.modules.push(path.resolve('./'));
    return config
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
