import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import log from '../../utils/logger';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import FormInput from '../../components/FormInput';
import { useTranslation } from 'react-i18next';

export default function RegisterProfile() {
	const { t } = useTranslation();
	useEffect(() => {
		log.info('RegisterProfile sayfası açıldı');
	}, []);

	return (
		<SafeAreaView style={styles.area}>
			<View style={styles.formContainer}>
				<FormInput onInputChanged={() => {}} placeholder={t('profile.namePlaceHolder')} />
			</View>
		</SafeAreaView>
	);
}
