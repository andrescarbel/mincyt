/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  output: 'export',
  basePath: '/mincyt',
  assetPrefix: '/mincyt',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/mincyt',
  },
  trailingSlash: true,
};

module.exports = nextConfig;
