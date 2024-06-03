/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['developers.elementor.com', 'via.placeholder.com'],
  },
  basePath: process.env.BASEPATH,
  reactStrictMode: true
}

module.exports = nextConfig
