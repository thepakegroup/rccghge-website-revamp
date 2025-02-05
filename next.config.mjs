/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.kouakoudomagni.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "staging.api.kouakoudomagni.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
