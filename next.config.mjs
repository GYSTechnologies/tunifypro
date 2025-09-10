/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.resound.com',
                port: '',
                pathname: '/**', // Allows all paths; adjust if you want to restrict
            },
        ],
    },
};

export default nextConfig;
