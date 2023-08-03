/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        remotePatterns: [
            // https://api.punkapi.com/
            {
                protocol: 'https',
                hostname: 'images.punkapi.com',
                port: '',
                pathname: '/v2/**'
            }
        ]
    }
}

module.exports = nextConfig
