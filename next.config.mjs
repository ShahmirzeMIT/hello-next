/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default {
  ...nextConfig,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts']
};
