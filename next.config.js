/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  output: 'export',
  basePath: '/mincyt',
  trailingSlash: true,
};

module.exports = nextConfig;
