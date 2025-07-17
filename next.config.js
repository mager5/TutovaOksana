/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['source.unsplash.com', 'images.unsplash.com']
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig