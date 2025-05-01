import * as RNLocalize from 'react-native-localize';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './locales/en.json';
import tr from './locales/tr.json';

const resources = {
	en: {translation: en},
	tr: {translation: tr}
};

const supportedLanguages = ['en', 'tr'];

const languageCode = RNLocalize.getLocales()[0]?.languageCode?.split('-')[0] || 'en';

const finalLanguage = supportedLanguages.includes(languageCode) ? languageCode : 'en';

const initializeI18Next = () => {
	i18n.use(initReactI18next).init({
		debug: false,
		resources,
		lng: finalLanguage,
		compatibilityJSON: 'v4',
		interpolation: {
			escapeValue: false
		}
	});
};

export default initializeI18Next;
