/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath for now to simplify deployment
  // basePath: '/keerthana-govindaraj',
  trailingSlash: true,
}

module.exports = nextConfig
