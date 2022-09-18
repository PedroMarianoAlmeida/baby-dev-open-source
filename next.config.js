/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["logodownload.org"], //This domain is temporary
  },
};

module.exports = nextConfig;
