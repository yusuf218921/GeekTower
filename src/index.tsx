import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './navigation/RootNavigator';
import { useEffect, useState } from 'react';
import initializeI18Next from './localization/i18n';
import log from './utils/logger';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from './lib/contexts/ToastProvider';

const Root = () => {
	const [initialized, setInitialized] = useState(false);

	const init = async () => {
		log.info('I18N başlatılıyor.');
		initializeI18Next();
	};

	useEffect(() => {
		init();
		log.info('Uygulama Başlatılıyor.');
		setInitialized(true);
	}, []);

	if (!initialized) {
		return;
	} else {
		return (
			<GestureHandlerRootView>
				<ToastProvider>
					<SafeAreaProvider>
						<RootNavigator />
					</SafeAreaProvider>
				</ToastProvider>
			</GestureHandlerRootView>
		);
	}
};

export default Root;
