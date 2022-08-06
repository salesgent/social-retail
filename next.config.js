/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    DOMAIN_BASE_URL: process.env.DOMAIN_BASE_URL,
    SERVICE_API_BASE_URL: process.env.SERVICE_API_BASE_URL,
  },
  images: {
    domains: ["d1lcbafy93xv06.cloudfront.net", "d3j5xyin142jiv.cloudfront.net"],
    disableStaticImages: false,
  },
};

module.exports = nextConfig;
