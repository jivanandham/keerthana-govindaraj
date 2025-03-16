/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/keerthana-govindaraj',
  assetPrefix: '/keerthana-govindaraj/',
  trailingSlash: true,
}

module.exports = nextConfig
