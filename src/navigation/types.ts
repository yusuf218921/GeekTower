import { StackAnimationTypes } from 'react-native-screens';

export type AuthStackParamList = {
	Welcome: { animation?: StackAnimationTypes };
	Login: { animation?: StackAnimationTypes };
	Register: { animation?: StackAnimationTypes };
};

export type RegisterStackParamList = {
	Login: { animation?: StackAnimationTypes };
	RegisterEmail: { animation?: StackAnimationTypes };
	RegisterPassword: { email: string; animation?: StackAnimationTypes };
	RegisterProfile: { animation?: StackAnimationTypes };
	RegisterAvatar: { animation?: StackAnimationTypes };
};

export type RootStackParamList = {
	Auth: undefined;
	// Main: undefined;
};
