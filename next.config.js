/** @type {import('next').NextConfig} */
const nextConfig = {
  // Убираем output: 'export' для серверного режима на Railway
  // output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  // distDir: 'out', // Убираем для серверного режима
  images: {
    unoptimized: true,
    domains: ['source.unsplash.com', 'images.unsplash.com']
  }
  // Убираем experimental.appDir - больше не нужен в Next.js 14
  // experimental: {
  //   appDir: true
  // }
}

module.exports = nextConfig