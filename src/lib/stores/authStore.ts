import { create } from 'zustand';
import { IUser } from '../models/IUser';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signOut
} from '@react-native-firebase/auth';
import { doc, getDoc, getFirestore, setDoc, Timestamp, updateDoc } from '@react-native-firebase/firestore';
import log from '../../utils/logger';

interface AuthState {
	user: IUser | null;
	isAuthenticated: boolean;
	loading: boolean;
	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string) => Promise<void>;
	update: (userId: string, partialData: Partial<IUser>) => Promise<void>;
	logout: () => Promise<void>;
	setUser: (user: IUser | null) => void;
}

const auth = getAuth();
const firestore = getFirestore();

export const useAuthStore = create<AuthState>(set => ({
	user: null,
	isAuthenticated: false,
	loading: false,

	login: async (email, password) => {
		log.info(`[Auth][login] Başlatıldı – email: ${email}`);
		set({ loading: true });
		try {
			const result = await signInWithEmailAndPassword(auth, email, password);
			const user = result.user;
			log.info(`[Auth][login] Firebase Auth başarılı – uid: ${user.uid}`);

			if (!user.emailVerified) {
				log.warn(`[Auth][login] E-posta doğrulanmamış – email: ${email}`);
				await signOut(auth);
				throw new Error('E-posta doğrulaması yapılmamış. Lütfen e-postanızı doğrulayın.');
			}

			const userDoc = await getDoc(doc(firestore, 'users', user.uid));
			if (!userDoc.exists()) {
				log.error(`[Auth][login] Firestore’da kullanıcı bulunamadı – uid: ${user.uid}`);
				await signOut(auth);
				throw new Error('Kullanıcı verisi Firestore’da bulunamadı.');
			}

			const userData: IUser = { id: userDoc.id, ...userDoc.data() } as IUser;
			set({
				user: userData,
				isAuthenticated: true
			});
			log.info(`[Auth][login] Kullanıcı store’a yüklendi – uid: ${user.uid}`);
		} catch (err) {
			log.error('[Auth][login] Hata oluştu', err as Error);
			throw err;
		} finally {
			log.debug('[Auth][login] loading false olarak ayarlandı');
			set({ loading: false });
		}
	},
	register: async (email, password) => {
		log.info(`[Auth][register] Başlatıldı – email: ${email}`);
		set({ loading: true });
		try {
			const result = await createUserWithEmailAndPassword(auth, email, password);
			log.info(`[Auth][register] Firebase Auth kullanıcı oluşturuldu – uid: ${result.user.uid}`);
			await sendEmailVerification(result.user);
			log.info(`[Auth][register] Doğrulama maili gönderildi – email: ${email}`);
			const user: Omit<IUser, 'id'> = {
				email: result.user.email ?? '',
				score: 0,
				currentFloor: 1,
				role: 'user',
				isProfileCompleted: false,
				archiveVisibility: 'private',
				createdAt: Timestamp.now()
			};
			await setDoc(doc(firestore, 'users', result.user.uid), user);
			log.info(`[Auth][register] Firestore’a yeni kullanıcı kaydedildi – uid: ${result.user.uid}`);
			await signOut(auth);
			set({ user: null, isAuthenticated: false });
			log.info('[Auth][register] Oturum kapatıldı, kullanıcı tekrar giriş yapmalı.');
		} catch (err) {
			throw err;
		} finally {
			set({ loading: false });
			log.debug('[Auth][register] loading false olarak ayarlandı');
		}
	},
	update: async (userId, partialData) => {
		log.info(`[Auth][update] Başlatıldı – userId: ${userId}, data: ${JSON.stringify(partialData)}`);
		set({ loading: true });
		try {
			const userRef = doc(firestore, 'users', userId);
			await updateDoc(userRef, partialData);
			log.info(`[Auth][update] Firestore güncelleme başarılı – userId: ${userId}`);

			const snap = await getDoc(userRef);
			if (!snap.exists()) {
				log.error(`[Auth][update] Güncellenen kullanıcı verisi yüklenemedi – userId: ${userId}`);
				throw new Error('Güncellenen kullanıcı verisi bulunamadı');
			}
			const data = snap.data() as Omit<IUser, 'id'>;
			set({
				user: {
					id: userId,
					...data
				}
			});
			log.info(`[Auth][update] Store güncellendi – userId: ${userId}`);
		} catch (err) {
			log.error('[Auth][update] Hata oluştu', err as Error);
			throw err;
		} finally {
			log.debug('[Auth][update] loading false olarak ayarlandı');
			set({ loading: false });
		}
	},
	logout: async () => {
		log.info('[Auth][logout] Başlatıldı');
		set({ loading: true });
		try {
			await signOut(auth);
			set({ user: null, isAuthenticated: false, loading: false });
			log.info('[Auth][logout] Oturum başarıyla kapatıldı');
		} catch (err) {
			log.error('[Auth][logout] Hata oluştu', err as Error);
			throw err;
		} finally {
			set({ loading: false });
			log.debug('[Auth][logout] loading false olarak ayarlandı');
		}
	},

	setUser: user => {
		log.info(`[Auth][setUser] user güncelleniyor – ${user ? user.id : 'null'}`);
		set({ user, isAuthenticated: !!user });
	}
}));

export function initAuthListener() {
	log.info('[Auth][listener] initAuthListener başlatıldı');
	const unsubscribe = onAuthStateChanged(auth, async fbUser => {
		if (fbUser && fbUser.emailVerified) {
			log.info(`[Auth][listener] Oturumlu kullanıcı tespit edildi – uid: ${fbUser.uid}`);
			const snap = await getDoc(doc(firestore, 'users', fbUser.uid));
			if (snap.exists()) {
				useAuthStore.getState().setUser({ id: snap.id, ...(snap.data() as any) });
			}
		} else {
			log.info('[Auth][listener] Oturum kapalı veya e-posta doğrulanmamış');
			useAuthStore.getState().setUser(null);
		}
		unsubscribe();
		log.debug('[Auth][listener] Listener unsubscribe edildi');
	});
}
