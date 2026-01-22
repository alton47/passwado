import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/passwado',
  assetPrefix: '/passwado/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;