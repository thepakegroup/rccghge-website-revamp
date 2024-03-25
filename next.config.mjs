/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api1.kouakoudomagni.com",
        port: "",
        pathname: "/home/webfiles/**",
      },
    ],
  },
};

export default nextConfig;
