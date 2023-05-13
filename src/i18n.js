import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationVi from './common/locales/vi.json';
import translationEn from './common/locales/en.json';
const resources = {
    vi: {
        translation: translationVi,
    },
    en: {
        translation: translationEn,
    }
};

const DEFAULT_LOCALE = localStorage.getItem('language') || 'vi';
i18n.use(initReactI18next).init({
    resources,
    lng: DEFAULT_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
    debug: true,
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
    },
});

export { DEFAULT_LOCALE };
export default i18n;