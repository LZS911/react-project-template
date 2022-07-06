import zhCN from './zh-CN';
import enUS from './en-US';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LocalStorageWrapper from '../utils/LocalStorageWrapper';
import { I18nKey, Dictionary } from '../typing/common.type';

enum SupportLanguage {
  zhCN = 'zh-CN',
  enUS = 'en-US',
}

const LanguageStorageKey = 'LANGUAGE';

i18n.use(initReactI18next).init({
  resources: {
    [SupportLanguage.zhCN]: zhCN,
    [SupportLanguage.enUS]: enUS,
  },
  lng: LocalStorageWrapper.getOrDefault(LanguageStorageKey, SupportLanguage.zhCN),
  fallbackLng: SupportLanguage.zhCN,
  interpolation: {
    escapeValue: false,
  },
});

const translation = (key: I18nKey, dic?: Dictionary) => {
  return i18n.t(key, dic);
};

export { SupportLanguage, translation, LanguageStorageKey };
export default i18n;
