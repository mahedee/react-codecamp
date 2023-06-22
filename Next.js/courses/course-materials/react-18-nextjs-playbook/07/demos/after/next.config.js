const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, buildId }) => {
    config.modules.rules.push({ test: /\.ext$/, use: ['my-loader'] })
    return config
  }
}