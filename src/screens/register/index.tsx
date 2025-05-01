import { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import log from '../../utils/logger';

const Register = () => {
	useEffect(() => {
		log.info('Register sayfası açıldı');
	}, []);
	return (
		<SafeAreaView>
			<ScrollView></ScrollView>
		</SafeAreaView>
	);
};

export default Register;
