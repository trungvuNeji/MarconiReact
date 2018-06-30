// This will house all of our translation
import 'babel-polyfill';
import 'core-js';
import 'es5-shim';
import 'es6-shim';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { en } from './en';
import { cn } from './cn';
import { ja } from './ja';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: en,
    cn: cn,
    ja: ja
  },
  fallbackLng: 'en',
  // debug can be turned on for console logger output of the current i18n language.
  // after that, please put it back to FALSE, otherwise it will break in IE9 and below.
  debug: false,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
});

export default i18n;