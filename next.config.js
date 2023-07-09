/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['app'],
  },
  i18n: {
    locales: ['en-US', 'vi'],
    defaultLocale: ['vi']
  },
};

module.exports = nextConfig;
