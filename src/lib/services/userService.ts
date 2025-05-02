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
import { IUser } from '../models/IUser';

const firestore = getFirestore();

export async function getUserById(userId: string): Promise<IUser | null> {
	const snap = await getDoc(doc(firestore, 'users', userId));
	if (!snap.exists()) return null;
	return { id: snap.id, ...(snap.data() as Omit<IUser, 'id'>) };
}

export async function createUser(userId: string, userData: Omit<IUser, 'id' | 'createdAt'>): Promise<void> {
	await setDoc(doc(firestore, 'users', userId), {
		...userData,
		createdAt: Timestamp.now()
	});
}

export async function updateUserDoc(userId: string, partialData: Partial<Omit<IUser, 'id' | 'createdAt'>>): Promise<void> {
	await updateDoc(doc(firestore, 'users', userId), partialData);
}

export async function getUserByEmail(email: string): Promise<IUser | null> {
	const q = query(collection(firestore, 'users'), where('email', '==', email), limit(1));
	const snaps = await getDocs(q);
	if (snaps.empty) return null;

	const docSnap = snaps.docs[0];
	return { id: docSnap.id, ...(docSnap.data() as Omit<IUser, 'id'>) };
}
