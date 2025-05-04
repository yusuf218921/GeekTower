import { Dimensions } from 'react-native';
import { StackAnimationTypes } from 'react-native-screens';
import { MD3LightTheme as DefaultLightTheme } from 'react-native-paper';
import { MD3DarkTheme as DefaultDarkTheme } from 'react-native-paper';

export const COLORS = {
	primary: '#0092F5',
	secondary: '#1E1A7E',
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

export const LightTheme = {
	...DefaultLightTheme,
	colors: {
		...DefaultLightTheme.colors,
		primary: '#5E35B1',
		onPrimary: '#FFFFFF',
		secondary: '#0f0f0f',
		onSecondary: '#FFFFFF',
		background: '#F9F9FC',
		onBackground: '#0f0f0f',
		surface: '#FFFFFF',
		onSurface: '#1C1C1C',
		error: '#D32F2F',
		onError: '#FFFFFF',
		outline: '#D1C4E9',
		elevation: {
			level0: 'transparent',
			level1: '#f0f0f5',
			level2: '#e0e0eb',
			level3: '#d1d1e0',
			level4: '#c2c2d6',
			level5: '#b3b3cc'
		}
	}
};

export const DarkTheme = {
	...DefaultDarkTheme,
	colors: {
		...DefaultDarkTheme.colors,
		primary: '#0092F5',
		onPrimary: '#000000',
		secondary: '#FFFFFF',
		onSecondary: '#1E1A7E',
		background: '#121212',
		surface: '#1E1E1E',
		onSurface: '#E0E0E0',
		error: '#EF5350',
		onError: '#000000',
		outline: '#7E57C2',
		elevation: {
			level0: 'transparent',
			level1: '#1E1E2A',
			level2: '#232332',
			level3: '#272738',
			level4: '#2C2C3E',
			level5: '#313144'
		}
	}
};
