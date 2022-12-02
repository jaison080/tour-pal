/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig&&{ images: { domains: ['lh3.googleusercontent.com','encrypted-tbn0.gstatic.com'], formats: ['image/avif', 'image/webp'], }, }


