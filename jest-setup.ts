// jest-setup.ts
import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';

// react-native-safe-area-context mock
jest.mock('react-native-safe-area-context', () => ({
	SafeAreaView: 'SafeAreaView',
	useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 })
}));

import 'react-native-reanimated/mock';

// 3. silence the native animated helper warnings

// diğer global mock’lar (eğer gerekiyorsa)
