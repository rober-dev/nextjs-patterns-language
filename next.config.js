const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  es: 'es',
  en: 'en'
};

const defaultLanguage = 'es';
const otherLanguages = Object.keys(localeSubpaths).filter(
  l => l !== defaultLanguage
);

module.exports = {
  distDir: 'build',
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
    defaultLanguage,
    otherLanguages
  }
};
