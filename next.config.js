/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['e-giftly.com'],
  },
  basePath: process.env.BASEPATH,
  reactStrictMode: true
}

module.exports = nextConfig
