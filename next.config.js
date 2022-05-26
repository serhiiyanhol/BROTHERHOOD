/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['uk-UA', 'en-US'],
    defaultLocale: 'uk-UA',
    localeDetection: false,
  },
}

module.exports = nextConfig
