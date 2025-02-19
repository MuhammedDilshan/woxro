/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all domains
      },
      {
        protocol: "http",
        hostname: "**", // Allows all domains (optional if using HTTP)
      },
    ],
  },
};

export default nextConfig;
