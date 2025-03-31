/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.crazygames.com'], // 允许从 CrazyGames 加载图片
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 