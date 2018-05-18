import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        'A new blockchain protocol for jump starting secure networks using programmable packets':
          'A new blockchain protocol for jump starting secure networks using programmable packets',
        'Team':
          'Team'
      }
    },
    cn: {
      translations: {
        'A new blockchain protocol for jump starting secure networks using programmable packets':
          '使用可编程数据包跳转启动安全网络的新区块链协议',
        'Team':
          '使用'
      }
    }
  },
  fallbackLng: 'en',
  debug: true,

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
