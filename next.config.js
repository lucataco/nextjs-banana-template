/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "banana.dev",
            },
            {
                protocol: "https",
                hostname: "www.banana.dev",
            },
        ],
    },
};

module.exports = nextConfig;
