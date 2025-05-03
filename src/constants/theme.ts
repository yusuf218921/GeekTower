import { Dimensions } from 'react-native';
import { StackAnimationTypes } from 'react-native-screens';

export const COLORS = {
	primary: '#1E1A7E',
	secondary: '#0092F5',
	white: '#FFFFFF',
	white2: '#F0F0F0',
	white3: '#c5c5c5',
	dark: '#000000',
	grey: '#2a2a2a',
	gray2: '#8E8E93',
	black: '#0f0f0f',
	error: '#d00e17',
	success: '#32C759',
	warn: '#ffc107',
	info: '#6f42c1'
};

export const SIZES = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height
};

export const SCREEN_ANIMATIONS = {
	push: 'slide_from_right' as StackAnimationTypes,
	replace: 'fade_from_bottom' as StackAnimationTypes
};
