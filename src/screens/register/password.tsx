import React, { useEffect, useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterStackParamList } from '../../navigation/types';
import log from '../../utils/logger';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import FormInput from '../../components/FormInput';
import { useTranslation } from 'react-i18next';
import { ValidationItem } from './components/ValidationItem';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '../../lib/stores/authStore';
import Header from '../../components/Header';
import { useToast } from '../../lib/contexts/ToastProvider';
import { SCREEN_ANIMATIONS } from '../../constants/theme';

type Props = NativeStackScreenProps<RegisterStackParamList, 'RegisterPassword'>;
type RegisterPasswordNavProp = NativeStackNavigationProp<RegisterStackParamList, 'RegisterPassword'>;

export default function RegisterPassword({ route }: Props) {
	const { email } = route.params;
	const navigation = useNavigation<RegisterPasswordNavProp>();
	const { t } = useTranslation();

	const { register, loading } = useAuthStore();

	const { showToast } = useToast();

	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const { hasMinLength, hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar, passwordsMatch, isPasswordValid } = useMemo(() => {
		const hasMinLength = password.length >= 8;
		const hasUpperCase = /[A-Z]/.test(password);
		const hasLowerCase = /[a-z]/.test(password);
		const hasNumber = /\d/.test(password);
		const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
		const passwordsMatch = password === confirmPassword && password !== '';
		const isPasswordValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
		return { hasMinLength, hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar, passwordsMatch, isPasswordValid };
	}, [password, confirmPassword]);

	useEffect(() => {
		log.info('RegisterPassword sayfası açıldı', email);
	}, []);

	const handlePasswordInputChange = (text: string) => {
		setPassword(text);
	};
	const handleConfirmPasswordInputChange = (text: string) => {
		setConfirmPassword(text);
	};

	const handleRegister = async () => {
		log.info('Register, handleRegister buttonuna basıldı');
		await register(email, password);
		const error = useAuthStore.getState().error;
		if (error) {
			showToast({ type: 'error', message: t(error) });
			return;
		}
		showToast({ type: 'info', message: t('password.confirmEmailSent'), duration: 3000 });
		await new Promise(resolve => setTimeout(resolve, 3000));
		navigation.navigate('RegisterProfile', { animation: SCREEN_ANIMATIONS.push });
	};
	return (
		<SafeAreaView style={[styles.area, { padding: 16 }]}>
			<Header onBackPress={navigation.goBack} />
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
					<View style={styles.validationContainer}>
						<ValidationItem isValid={hasMinLength} text={t('password.validation.hasMinLength')} />
						<ValidationItem isValid={hasUpperCase} text={t('password.validation.hasUpperCase')} />
						<ValidationItem isValid={hasLowerCase} text={t('password.validation.hasLowerCase')} />
						<ValidationItem isValid={hasNumber} text={t('password.validation.hasNumber')} />
						<ValidationItem isValid={hasSpecialChar} text={t('password.validation.hasSpecialChar')} />
						<ValidationItem isValid={passwordsMatch} text={t('password.validation.passwordsMatch')} />
					</View>
				</View>
			</View>
			<View style={styles.passwordButtonContainer}>
				<Button
					title={t('password.button')}
					filled
					onPress={handleRegister}
					loading={loading}
					disabled={!isPasswordValid || !passwordsMatch}
				/>
			</View>
		</SafeAreaView>
	);
}
