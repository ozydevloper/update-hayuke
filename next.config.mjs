/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: 'lh3.googleusercontent.com',
      }
    ],
    
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
