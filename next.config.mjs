/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    emotion: true,
  },
  experimental: {
    optimizePackageImports: ['@mui/icons-material', '@mui/material', 'formik-mui', 'swiper'],
  },
};

export default nextConfig;
