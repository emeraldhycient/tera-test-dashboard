// next.config.js
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd3i5mgdwi2ze58.cloudfront.net',
            },
        ],
    },
}

module.exports = nextConfig;
