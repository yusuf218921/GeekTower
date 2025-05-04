import { Timestamp } from '@react-native-firebase/firestore';
import { IModel } from './IModel';

export type UserRole = 'user' | 'admin';
export type ArchiveVisibility = 'public' | 'private';

export interface IUser extends IModel {
	email: string;
	username?: string;
	name?: string;
	biography?: string;
	avatarUrl?: string;
	// isVerified: boolean;
	// verifiedAt?: Timestamp;
	score: number;
	currentFloor: number;
	title: string;
	isProfileCompleted: boolean;
	archiveVisibility: ArchiveVisibility;
	role: UserRole;
}
