import i18n,{i18n as I18n,TFunction} from "i18next";
import { initReactI18next } from "react-i18next";
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          "GLOBAL.NEW": "新增{{text}}",
          "GLOBAL.REMOVE": "remove",
          "GLOBAL.MODIFY": "modify",
          "GLOBAL.DETAIL": "detail",
        },
      },
      zh: {
        translation: {
          "GLOBAL.NEW": "新增",
          "GLOBAL.REMOVE": "remove",
          "GLOBAL.MODIFY": "modify",
          "GLOBAL.DETAIL": "detail",
        },
      },
    },
  });

export interface I18nProps{
  i18n: I18n;
  tReady: boolean;
  t: TFunction;
}
  export default i18n