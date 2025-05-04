// __mocks__/react-i18next.ts

type Language = 'en' | 'tr';

interface Translations {
	error: {
		emailNotVerified: string;
		userNotFound: string;
		firestore: string;
		unknown: string;
		invalidEmailFormat: string;
		emailAlreadyExist: string;
	};
	welcome: {
		title: string;
		subtitle: string;
		button: {
			login: string;
			register: string;
		};
		bottom: string;
	};
	login: {
		title: string;
		emailPlaceHolder: string;
		loginButton: string;
		bottomPrefix: string;
		bottomSuffix: string;
		orSeparator: string;
		social: {
			microsoft: string;
			google: string;
			apple: string;
		};
		privacy: string;
		terms: string;
	};
	register: {
		title: string;
		emailPlaceHolder: string;
		registerButton: string;
		bottomPrefix: string;
		bottomSuffix: string;
		orSeparator: string;
		social: {
			microsoft: string;
			google: string;
			apple: string;
		};
		privacy: string;
		terms: string;
	};
	password: {
		title: string;
		placeHolder: string;
		confirmPlaceHolder?: string;
		validation?: {
			hasMinLength: string;
			hasUpperCase: string;
			hasLowerCase: string;
			hasNumber: string;
			hasSpecialChar: string;
			passwordsMatch?: string;
		};
		button?: string;
		confirmEmailSent?: string;
	};
	button?: string;
	confirmEmailSent?: string;
}

const translations: Record<Language, Translations> = {
	en: {
		error: {
			emailNotVerified: 'Please verify your email address.',
			userNotFound: 'User not found.',
			firestore: 'A server error occurred. Please try again later.',
			unknown: 'An unexpected error occurred. Please try again later.',
			invalidEmailFormat: 'The email is not valid',
			emailAlreadyExist: 'This email is already registered.'
		},
		welcome: {
			title: 'Welcome to GeekTower!',
			subtitle:
				'Archive what you’ve watched, level up, get recommendations. Turn your tastes into a tower, your journey starts right here!',
			button: {
				login: 'Enter the Tower',
				register: 'Begin Your Journey'
			},
			bottom: '© 2025 GeekTower · All rights reserved.'
		},
		login: {
			title: 'Welcome to the Tower',
			emailPlaceHolder: 'Email address',
			loginButton: 'Continue',
			bottomPrefix: "Don't have an account? ",
			bottomSuffix: 'Sign up',
			orSeparator: 'OR',
			social: {
				microsoft: 'Continue with Microsoft',
				google: 'Continue with Google',
				apple: 'Continue with Apple'
			},
			privacy: 'Privacy Policy',
			terms: 'Terms of Use'
		},
		register: {
			title: 'Your Journey Begins Here',
			emailPlaceHolder: 'Email address',
			registerButton: 'Continue',
			bottomPrefix: 'Already have an account? ',
			bottomSuffix: 'Sign in',
			orSeparator: 'OR',
			social: {
				microsoft: 'Continue with Microsoft',
				google: 'Continue with Google',
				apple: 'Continue with Apple'
			},
			privacy: 'Privacy Policy',
			terms: 'Terms of Use'
		},
		password: {
			title: 'Create a password',
			placeHolder: 'Create a password',
			confirmPlaceHolder: 'Confirm your password',
			validation: {
				hasMinLength: 'At least 8 characters',
				hasUpperCase: 'At least one uppercase letter',
				hasLowerCase: 'At least one lowercase letter',
				hasNumber: 'At least one number',
				hasSpecialChar: 'At least one special character',
				passwordsMatch: 'Passwords match'
			}
		},
		button: 'Continue',
		confirmEmailSent: 'Confirmation email sent. Please check your inbox to verify your account.'
	},
	tr: {
		error: {
			emailNotVerified: 'Lütfen e-posta adresinizi onaylayın.',
			userNotFound: 'Böyle bir kullanıcı bulunamadı.',
			firestore: 'Sunucu tarafında bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
			unknown: 'Bilinmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
			invalidEmailFormat: 'E-Posta geçerli değil.',
			emailAlreadyExist: 'Bu e-posta adresi zaten kayıtlı.'
		},
		welcome: {
			title: 'GeekTower’a Hoş Geldin!',
			subtitle: 'İzlediklerini arşivle, kat atla, öneriler al. Zevklerini kuleye dönüştür, yolculuğun tam burada başlıyor!',
			button: {
				login: 'Kuleye Giriş Yap',
				register: 'Yolculuğa Başla'
			},
			bottom: '© 2025 GeekTower · Tüm hakları saklıdır.'
		},
		login: {
			title: 'Kuleye Hoş Geldin',
			emailPlaceHolder: 'E-posta adresi',
			loginButton: 'Devam Et',
			bottomPrefix: 'Hesabın yok mu? ',
			bottomSuffix: 'Kayıt Ol',
			orSeparator: 'VEYA',
			social: {
				microsoft: 'Microsoft ile devam et',
				google: 'Google ile devam et',
				apple: 'Apple ile devam et'
			},
			privacy: 'Gizlilik Politikası',
			terms: 'Kullanım Şartları'
		},
		register: {
			title: 'Yolculuğun Burada Başlıyor',
			emailPlaceHolder: 'E-posta adresi',
			registerButton: 'Devam Et',
			bottomPrefix: 'Zaten hesabın var mı? ',
			bottomSuffix: 'Giriş Yap',
			orSeparator: 'VEYA',
			social: {
				microsoft: 'Microsoft ile devam et',
				google: 'Google ile devam et',
				apple: 'Apple ile devam et'
			},
			privacy: 'Gizlilik Politikası',
			terms: 'Kullanım Şartları'
		},
		password: {
			title: 'Şifreni Belirle',
			placeHolder: 'Şifre',
			confirmPlaceHolder: 'Şifreyi Onayla',
			validation: {
				hasMinLength: 'En az 8 karakter',
				hasUpperCase: 'En az bir büyük harf',
				hasLowerCase: 'En az bir küçük harf',
				hasNumber: 'En az bir sayı',
				hasSpecialChar: 'En az bir özel karakter',
				passwordsMatch: 'Şifreler eşleşiyor'
			},
			button: 'Devam Et',
			confirmEmailSent: 'Onay e-postası gönderildi. Hesabınızı doğrulamak için gelen kutunuzu kontrol edin.'
		}
	}
};

let currentLang: Language = 'en';

export function mockChangeLanguage(lang: Language) {
	currentLang = lang;
}

export function useTranslation() {
	return {
		t: (key: string) => {
			// nested objeyi desteklemek için:
			const parts = key.split('.');
			let result: any = translations[currentLang];
			for (const part of parts) {
				result = result?.[part];
				if (result == null) break;
			}
			return typeof result === 'string' ? result : key;
		},
		i18n: {
			changeLanguage: mockChangeLanguage,
			language: currentLang
		}
	};
}
