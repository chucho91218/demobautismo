/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esto genera la carpeta 'out'
  images: {
    unoptimized: true, // Obligatorio para que las imágenes funcionen en Cloudflare
  },
};

export default nextConfig;