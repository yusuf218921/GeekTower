// jest.config.js
module.exports = {
	preset: 'react-native',
	transform: {
		'^.+\\.(js|ts|tsx)$': 'babel-jest'
	},
	transformIgnorePatterns: [
		'node_modules/(?!(react-native|@react-native|react-native-responsive-screen|@react-navigation/native|@react-navigation/native-stack)/)'
	],
	setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', '<rootDir>/jest-setup.ts'],
	testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
