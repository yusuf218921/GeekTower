export const navigateMock = jest.fn();

export function useNavigation() {
	return { navigate: navigateMock };
}

export * from 'react-native';
