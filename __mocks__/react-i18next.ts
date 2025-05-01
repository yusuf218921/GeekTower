type Language = 'en' | 'tr';

const translations: Record<Language, Record<string, string>> = {
	en: {
		'welcome.title': 'Welcome to GeekTower!',
		'welcome.subtitle':
			'Archive what you’ve watched, level up, get recommendations. Turn your tastes into a tower, your journey starts right here!',
		'welcome.button.login': 'Enter the Tower',
		'welcome.button.register': 'Begin Your Journey',
		'welcome.bottom': '© 2025 GeekTower · All rights reserved.'
	},
	tr: {
		'welcome.title': 'GeekTower’a Hoş Geldin!',
		'welcome.subtitle':
			'İzlediklerini arşivle, kat atla, öneriler al. Zevklerini kuleye dönüştür, yolculuğun tam burada başlıyor!',
		'welcome.button.login': 'Kuleye Giriş Yap',
		'welcome.button.register': 'Yolculuğa Başla',
		'welcome.bottom': '© 2025 GeekTower · Tüm hakları saklıdır.'
	}
};

let currentLang: Language = 'en';

export function mockChangeLanguage(lang: Language) {
	currentLang = lang;
}

export function useTranslation() {
	return {
		t: (key: string) => translations[currentLang][key] ?? key,
		i18n: {
			changeLanguage: mockChangeLanguage,
			language: currentLang
		}
	};
}
