import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './navigation/RootNavigator';
import { useEffect, useState } from 'react';
import initializeI18Next from './localization/i18n';

const Root = () => {
	const [initialized, setInitialized] = useState(false);

	const init = async () => {
		initializeI18Next();
	};

	useEffect(() => {
		init();
	}, []);

	return (
		<GestureHandlerRootView>
			<RootNavigator />
		</GestureHandlerRootView>
	);
};

export default Root;
