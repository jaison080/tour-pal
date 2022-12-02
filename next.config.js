/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig&&{ images: { domains: ['lh3.googleusercontent.com'], formats: ['image/avif', 'image/webp'], }, }


