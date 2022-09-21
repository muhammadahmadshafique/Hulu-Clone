/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.pixabay.com","brandslogos.com","image.tmdb.org"]
  },
}

module.exports = nextConfig
