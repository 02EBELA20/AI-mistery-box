/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // ✅ ეს არის მნიშვნელოვანი Netlify-სთვის
  images: {
    unoptimized: true, // ✅ ეს გამორთავს Image Optimization API-ს
  },
};

export default nextConfig;
