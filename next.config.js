/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co'], // 允许从 placehold.co 加载图片
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // 设备尺寸断点
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // 图片尺寸
    unoptimized: true
  },
  devServer: {
    port: 3001,
    host: '0.0.0.0'
  }
}

module.exports = nextConfig 