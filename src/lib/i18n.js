const NextI18Next = require('next-i18next').default;
const {
  localeSubpaths,
  defaultLanguage,
  otherLanguages
} = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
  otherLanguages,
  localeSubpaths,
  defaultLanguage,
  localePath: path.resolve('./public/static/locales')
});
