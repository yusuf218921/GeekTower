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
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import Header from '../../components/Header';
import { SCREEN_ANIMATIONS } from '../../constants/theme';

type LoginNavProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const Login = () => {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState<string>();
	const navigation = useNavigation<LoginNavProp>();

	const handleEmailInputChange = (text: string) => {
		setEmail(text);
		setEmailError(undefined);
	};

	const handleLoginPress = () => {
		log.info('Login butonuna basıldı', { email });
		const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
		if (!emailRegex.test(email)) {
			const err = t('error.invalidEmailFormat') || 'Geçersiz e-posta formatı';
			setEmailError(err);
			return;
		}
	};
	const { t } = useTranslation();
	useEffect(() => {
		log.info('Login sayfası açıldı');
	}, []);
	return (
		<SafeAreaView style={styles.area}>
			<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
				<Header onBackPress={navigation.goBack} />
				<View style={styles.formContainer}>
					<Text style={styles.title}>{t('login.title')}</Text>
					<FormInput
						onInputChanged={handleEmailInputChange}
						value={email}
						placeholder={t('login.emailPlaceHolder')}
						keyboardType='email-address'
						autoCapitalize='none'
						errorText={emailError}
					/>
					<Button filled title={t('login.loginButton')} onPress={handleLoginPress} />
					<View style={styles.bottom}>
						<Text style={styles.bottomText}>{t('login.bottomPrefix')}</Text>
						<TouchableOpacity onPress={() => navigation.replace('Register', { animation: SCREEN_ANIMATIONS.replace })}>
							<Text style={styles.bottomLink}>{t('login.bottomSuffix')}</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.separatorContainer}>
					<View style={styles.separatorLine} />
					<Text style={styles.separatorText}>{t('login.orSeparator')}</Text>
					<View style={styles.separatorLine} />
				</View>
				<View style={styles.socialContainer}>
					<SocialButton icon={icons.google} title={t('login.social.google')} />
					{Platform.OS === 'ios' && <SocialButton icon={icons.apple} title={t('login.social.apple')} />}
					<SocialButton icon={icons.microsoft} title={t('login.social.microsoft')} />
				</View>
				<View style={styles.footerContainer}>
					<TouchableOpacity>
						<Text style={styles.footerText}>{t('login.privacy')}</Text>
					</TouchableOpacity>
					<View style={styles.policySeparator} />
					<TouchableOpacity>
						<Text style={styles.footerText}>{t('login.terms')}</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Login;
