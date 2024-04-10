/** @type {import('next').NextConfig} */
// eslint-disable-next-line import/no-extraneous-dependencies
import withExportImages from "next-export-optimize-images";

const nextConfig = withExportImages({
  compiler: {
    emotion: true,
  },
  experimental: {
    optimizePackageImports: [
      "@mui/icons-material",
      "@mui/material",
      "formik-mui",
      "swiper",
    ],
  },
  // TODO: Uncomment it for static export - https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  // output: 'export',
});

export default nextConfig;
