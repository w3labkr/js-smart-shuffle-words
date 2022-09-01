import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './en/translation.json';
import translationKo from './ko/translation.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translations: translationEn,
  },
  ko: {
    translations: translationKo,
  },
};

/* eslint-disable */
i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,

    // It is recommended to read up on IETF Language Codes.
    // If you're using a language detector, do not define the lng option
    // https://en.wikipedia.org/wiki/IETF_language_tag
    lng: 'ko',
    fallbackLng: 'ko',

    ns: ['translations'], // string or array of namespaces to load
    defaultNS: 'translations', // default namespace used if not passed to the translation function

    // char to separate keys. If working with a flat JSON,
    // it's recommended to set this to false.
    keySeparator: false, // (default) '.'

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
