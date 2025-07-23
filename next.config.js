/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    domains: ["vercel.com", "assets.vercel.com", "hebbkx1anhila5yf.public.blob.vercel-storage.com", "api.qrserver.com"],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === "production" ? "/ppp" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/ppp/" : "",
  // Ensure static export works properly
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig
