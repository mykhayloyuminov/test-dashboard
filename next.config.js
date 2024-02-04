/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    ...(process.env.APPLICATION_MODE === 'production' && {
        typescript: {
            ignoreBuildErrors: true,
        },
        eslint: {
            ignoreDuringBuilds: true,
        },
    }),
};
