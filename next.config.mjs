/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  compiler: {
    styledComponents: true,
  },
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
