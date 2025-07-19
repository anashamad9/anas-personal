/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/anas-personal",
  assetPrefix: "/anas-personal/",
  images: {
    domains: ["vercel.com", "assets.vercel.com", "hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
