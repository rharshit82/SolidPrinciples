/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  },
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
        test: /\.md$/,
      loader: "raw-loader",
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
