/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
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
  // Add base path if your repo name is not the domain
  basePath: process.env.NODE_ENV === "production" ? "/ppp" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/ppp/" : "",
}

module.exports = nextConfig
