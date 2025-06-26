const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ui.aceternity.com'],
  },
  output:'export'
};

export default nextConfig;


