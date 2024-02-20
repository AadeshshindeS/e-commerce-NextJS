/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com", "t4.ftcdn.net"],
  },
};

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default nextConfig;
