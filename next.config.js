/** @type {import('next').NextConfig} */

const path = require('path')
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
    // loader: "custom",
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: 80,
    nextImageExportOptimizer_storePicturesInWEBP: true,
    // nextImageExportOptimizer_exportFolderPath: "nextImageExportOptimizer",

    // If you do not want to use blurry placeholder images, then you can set
    // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
    // `placeholder="empty"` to all <ExportedImage> components.
    //
    // If nextImageExportOptimizer_generateAndUseBlurImages is false and you
    // forget to set `placeholder="empty"`, you'll see 404 errors for the missing
    // placeholder images in the console.
    nextImageExportOptimizer_generateAndUseBlurImages: true,
  },

}

module.exports = nextConfig
