const config = {
    appName: 'e-patrol',
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'DEVELOPMENT',
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || '',
    socketUrl: process.env.NEXT_PUBLIC_SOCKET_URL || '',
    isProd: process.env.NODE_ENV === 'production',
};

export default config;
