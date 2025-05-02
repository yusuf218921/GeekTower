import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterStackParamList } from '../../navigation/types';
import log from '../../utils/logger';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import FormInput from '../../components/FormInput';
import { useTranslation } from 'react-i18next';

type Props = NativeStackScreenProps<RegisterStackParamList, 'RegisterPassword'>;

export default function RegisterPassword({ route }: Props) {
	const { email } = route.params;

	const { t } = useTranslation();

	const [password, setPassword] = useState<string>();
	const [confirmPassword, setConfirmPassword] = useState<string>();

	useEffect(() => {
		log.info('RegisterPassword sayfası açıldı', email);
	}, []);

	const handlePasswordInputChange = (text: string) => {
		setPassword(text);
	};
	const handleConfirmPasswordInputChange = (text: string) => {
		setConfirmPassword(text);
	};

	return (
		<SafeAreaView style={[styles.area, { padding: 16 }]}>
			<View style={styles.formPasswordContainer}>
				<Text style={styles.passwordTitle}>{t('password.title')}</Text>
				<View style={styles.passwordContainer}>
					<FormInput
						onInputChanged={handlePasswordInputChange}
						value={password}
						placeholder={t('password.placeHolder')}
						keyboardType='default'
					/>
					<FormInput
						onInputChanged={handleConfirmPasswordInputChange}
						value={confirmPassword}
						placeholder={t('password.confirmPlaceHolder')}
					/>
				</View>
			</View>
			<View style={styles.passwordValidationContainer}>{/*TODO: ŞİFRE EKRANINDAN DEVAM EDİLECEK*/}</View>
		</SafeAreaView>
	);
}
