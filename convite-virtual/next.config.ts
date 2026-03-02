/** @type {import('next').NextConfig} */
const nextConfig = {
  // Substitua 'anac' pelo nome exato do seu repositório no GitHub
  basePath: '/anac',
  assetPrefix: '/anac',
  output: 'export', // Necessário para o GitHub Pages
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
};

export default nextConfig;
