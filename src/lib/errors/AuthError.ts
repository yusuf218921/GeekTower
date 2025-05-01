// src/errors/AuthErrors.ts

export abstract class AuthError extends Error {
	/** i18n kaynaklarında bakılacak anahtar */
	public readonly translationKey: string;

	constructor(translationKey: string, defaultMessage: string) {
		super(defaultMessage);
		this.name = new.target.name;
		this.translationKey = translationKey;
	}
}

export class EmailNotVerifiedError extends AuthError {
	constructor() {
		// "errors.emailNotVerified" key’ine bak, bulunmazsa ikinci parametreyi göster
		super('errors.emailNotVerified', 'E-posta adresiniz doğrulanmamış.');
	}
}

export class UserNotFoundError extends AuthError {
	constructor() {
		super('errors.userNotFound', 'Kullanıcı verisi bulunamadı.');
	}
}

export class FirestoreError extends AuthError {
	constructor(inner?: Error) {
		super('errors.firestore', `Sunucu hatası oluştu.${inner ? ' ' + inner.message : ''}`);
	}
}
