import { Timestamp } from '@react-native-firebase/firestore';

export interface IModel {
	id: string;
	createdAt: Timestamp;
	updatedAt?: Timestamp;
}
