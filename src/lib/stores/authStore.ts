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
		set({ loading: true });
		try {
			const result = await signInWithEmailAndPassword(auth, email, password);
			const user = result.user;

			if (!user.emailVerified) {
				await signOut(auth);
				throw new Error('E-posta doğrulaması yapılmamış. Lütfen e-postanızı doğrulayın.');
			}

			const userDoc = await getDoc(doc(firestore, 'users', user.uid));
			if (!userDoc.exists()) {
				await signOut(auth);
				throw new Error('Kullanıcı verisi Firestore’da bulunamadı.');
			}

			const userData: IUser = { id: userDoc.id, ...userDoc.data() } as IUser;
			set({
				user: userData,
				isAuthenticated: true
			});
		} catch (err) {
			throw err;
		} finally {
			set({ loading: false });
		}
	},
	register: async (email, password) => {
		set({ loading: true });
		try {
			const result = await createUserWithEmailAndPassword(auth, email, password);
			await sendEmailVerification(result.user);
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
			await signOut(auth);
			set({ user: null, isAuthenticated: false });
		} catch (err) {
			throw err;
		} finally {
			set({ loading: false });
		}
	},
	update: async (userId, partialData) => {
		set({ loading: true });
		try {
			const userRef = doc(firestore, 'users', userId);
			await updateDoc(userRef, partialData);
			const snap = await getDoc(userRef);
			if (!snap.exists()) {
				throw new Error('Güncellenen kullanıcı verisi bulunamadı');
			}
			const data = snap.data() as Omit<IUser, 'id'>;
			set({
				user: {
					id: userId,
					...data
				}
			});
		} catch (err) {
			throw err;
		} finally {
			set({ loading: false });
		}
	},
	logout: async () => {
		set({ loading: true });
		await signOut(auth);
		set({ user: null, isAuthenticated: false, loading: false });
	},

	setUser: user => {
		set({ user, isAuthenticated: !!user });
	}
}));

export function initAuthListener() {
	const unsubscribe = onAuthStateChanged(auth, async fbUser => {
		if (fbUser && fbUser.emailVerified) {
			const snap = await getDoc(doc(firestore, 'users', fbUser.uid));
			if (snap.exists()) {
				useAuthStore.getState().setUser({ id: snap.id, ...(snap.data() as any) });
			}
		} else {
			useAuthStore.getState().setUser(null);
		}
		unsubscribe();
	});
}
