import userConfig from './i18next.config.js'
import withPWA from "next-pwa"

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  ...userConfig,
  images: {
    domains: ["res.cloudinary.com"]
  },
  pwa: {
    dest: 'public'
  }
})

export default nextConfig 
