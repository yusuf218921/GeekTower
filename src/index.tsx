import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './navigation/RootNavigator';
import { useEffect, useState } from 'react';
import initializeI18Next from './localization/i18n';
import log from './utils/logger';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from './lib/contexts/ToastProvider';
import { PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from './constants';

const Root = () => {
	const [initialized, setInitialized] = useState(false);
	const colorScheme = useColorScheme();
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
				<PaperProvider theme={colorScheme === 'light' ? DarkTheme : LightTheme}>
					<ToastProvider>
						<SafeAreaProvider>
							<RootNavigator />
						</SafeAreaProvider>
					</ToastProvider>
				</PaperProvider>
			</GestureHandlerRootView>
		);
	}
};

export default Root;
