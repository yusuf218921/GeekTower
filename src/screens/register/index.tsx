import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import log from '../../utils/logger';
import { styles } from './styles';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import SocialButton from '../../components/SocialButton';
import { icons } from '../../constants';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RegisterStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import { getUserByEmail } from '../../lib/services/userService';
import Header from '../../components/Header';
import { useToast } from '../../lib/contexts/ToastProvider';
import { SCREEN_ANIMATIONS } from '../../constants/theme';

type RegisterNavProp = NativeStackNavigationProp<RegisterStackParamList, 'RegisterEmail'>;

const Register = () => {
	const navigation = useNavigation<RegisterNavProp>();
	const { t } = useTranslation();

	const { showToast } = useToast();

	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState<string>();
	const [loading, setLoading] = useState(false);

	const handleEmailInputChange = (text: string) => {
		setEmail(text);
		setEmailError(undefined);
	};

	const handleRegisterPress = async () => {
		log.info('Register butonuna basıldı', { email });
		const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
		if (!emailRegex.test(email)) {
			const err = t('error.invalidEmailFormat') || 'Geçersiz e-posta formatı';
			setEmailError(err);
			return;
		}
		setLoading(true);
		getUserByEmail(email)
			.then(user => {
				if (user) {
					showToast({ type: 'error', message: t('error.emailAlreadyExist') });
					return;
				} else {
					navigation.navigate('RegisterPassword', { email });
				}
			})
			.catch(err => {
				showToast({ type: 'error', message: t('error.unknown') });
			})
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		log.info('Register sayfası açıldı');
	}, []);

	return (
		<SafeAreaView style={styles.area}>
			<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
				<Header onBackPress={navigation.goBack} />
				<View style={styles.formContainer}>
					<Text style={styles.title}>{t('register.title')}</Text>
					<FormInput
						onInputChanged={handleEmailInputChange}
						value={email}
						placeholder={t('register.emailPlaceHolder')}
						keyboardType='email-address'
						autoCapitalize='none'
						errorText={emailError}
					/>
					<Button filled title={t('register.registerButton')} onPress={handleRegisterPress} loading={loading} />
					<View style={styles.bottom}>
						<Text style={styles.bottomText}>{t('register.bottomPrefix')}</Text>
						<TouchableOpacity onPress={() => navigation.replace('Login', { animation: SCREEN_ANIMATIONS.replace })}>
							<Text style={styles.bottomLink}>{t('register.bottomSuffix')}</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.separatorContainer}>
					<View style={styles.separatorLine} />
					<Text style={styles.separatorText}>{t('register.orSeparator')}</Text>
					<View style={styles.separatorLine} />
				</View>
				<View style={styles.socialContainer}>
					<SocialButton icon={icons.google} title={t('register.social.google')} />
					{Platform.OS === 'ios' && <SocialButton icon={icons.apple} title={t('register.social.apple')} />}
					<SocialButton icon={icons.microsoft} title={t('register.social.microsoft')} />
				</View>
				<View style={styles.footerContainer}>
					<TouchableOpacity>
						<Text style={styles.footerText}>{t('register.privacy')}</Text>
					</TouchableOpacity>
					<View style={styles.policySeparator} />
					<TouchableOpacity>
						<Text style={styles.footerText}>{t('register.terms')}</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Register;
