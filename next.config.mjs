/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default {
  ...nextConfig,
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};
