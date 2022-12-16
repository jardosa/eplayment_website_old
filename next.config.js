module.exports = {
  // other next config
  i18n: {
    locales: ['en', 'ms'],
    defaultLocale: 'en',
  },

  async redirects() {
    return [
      {
        source: '/services',
        destination: '/services/eplayment',
        permanent: true,
      },
      {
        source: '/signup',
        destination: '/',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['cdn.eplayment.com'],
  },
  env: {
    SPREADSHEET_ID: process.env.SPREADSHEET_ID,
    SHEET_ID: process.env.SHEET_ID,
    NEWSLETTER_SHEET_ID: process.env.NEWSLETTER_SHEET_ID,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_SERVICE_PRIVATE_KEY: process.env.GOOGLE_SERVICE_PRIVATE_KEY,
  },
  webpack5: false,

  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.node = {
      // Some libraries import Node modules but don't use them in the browser.
      // Tell Webpack to provide empty mocks for them so importing them works.
      ...config.node,
      fs: 'empty',
      child_process: 'empty',
      net: 'empty',
      tls: 'empty',
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
