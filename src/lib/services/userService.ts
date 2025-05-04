import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	updateDoc,
	Timestamp,
	query,
	collection,
	getDocs,
	where,
	limit
} from '@react-native-firebase/firestore';
import log from '../../utils/logger';
import { IUser } from '../models/IUser';

const firestore = getFirestore();

export async function getUserById(userId: string): Promise<IUser | null> {
	log.info(`getUserById çalıştı. Kullanıcı ID: ${userId}`);
	try {
		const snap = await getDoc(doc(firestore, 'users', userId));
		if (!snap.exists()) {
			log.warn(`Kullanıcı bulunamadı. ID: ${userId}`);
			return null;
		}
		const user = { id: snap.id, ...(snap.data() as Omit<IUser, 'id'>) };
		log.info(`Kullanıcı başarıyla alındı. ID: ${userId}`);
		return user;
	} catch (error) {
		log.error(`getUserById sırasında hata: ${(error as Error).message}`);
		throw error;
	}
}

export async function createUser(userId: string, userData: Omit<IUser, 'id' | 'createdAt'>): Promise<void> {
	log.info(`createUser çağrıldı. ID: ${userId}, Veri: ${JSON.stringify(userData)}`);
	try {
		await setDoc(doc(firestore, 'users', userId), {
			...userData,
			createdAt: Timestamp.now(),
			updatedAt: Timestamp.now()
		});
		log.info(`Kullanıcı oluşturuldu. ID: ${userId}`);
	} catch (error) {
		log.error(`createUser sırasında hata: ${(error as Error).message}`);
		throw error;
	}
}

export async function updateUserDoc(userId: string, partialData: Partial<Omit<IUser, 'id' | 'createdAt'>>): Promise<void> {
	log.info(`updateUserDoc çağrıldı. ID: ${userId}, Güncellenecek Veri: ${JSON.stringify(partialData)}`);
	try {
		await updateDoc(doc(firestore, 'users', userId), partialData);
		log.info(`Kullanıcı güncellendi. ID: ${userId}`);
	} catch (error) {
		log.error(`updateUserDoc sırasında hata: ${(error as Error).message}`);
		throw error;
	}
}

export async function getUserByEmail(email: string): Promise<IUser | null> {
	log.info(`getUserByEmail çalıştı. E-posta: ${email}`);
	try {
		const q = query(collection(firestore, 'users'), where('email', '==', email), limit(1));
		const snaps = await getDocs(q);
		if (snaps.empty) {
			log.warn(`E-posta ile kullanıcı bulunamadı. E-posta: ${email}`);
			return null;
		}
		const docSnap = snaps.docs[0];
		const user = { id: docSnap.id, ...(docSnap.data() as Omit<IUser, 'id'>) };
		log.info(`E-posta ile kullanıcı alındı. ID: ${user.id}, E-posta: ${email}`);
		return user;
	} catch (error) {
		log.error(`getUserByEmail sırasında hata: ${(error as Error).message}`);
		throw error;
	}
}
