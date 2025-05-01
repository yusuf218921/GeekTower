// src/screens/WelcomeScreen.tsx
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { images } from '../../constants';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';

type WelcomeNavProp = NativeStackNavigationProp<AuthStackParamList, 'Welcome'>;

export default function WelcomeScreen() {
	const { t } = useTranslation();
	const navigation = useNavigation<WelcomeNavProp>();

	const handleLoginButton = () => {
		navigation.navigate('Login');
	};

	const handleRegisterButton = () => {
		navigation.navigate('Register');
	};

	return (
		<SafeAreaView style={styles.area}>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
				<View style={styles.header}>
					<View style={styles.logoWrapper}>
						<Image style={styles.logo} source={images.logo} />
					</View>
					<Text style={styles.title}>{t('welcome.title')}</Text>
					<Text style={styles.subtitle}>{t('welcome.subtitle')}</Text>
				</View>
				<View style={styles.main}>
					<Button title={t('welcome.button.login')} onPress={handleLoginButton} />
					<Button title={t('welcome.button.register')} filled onPress={handleRegisterButton} />
				</View>
				<View style={styles.footer}>
					<Text style={styles.bottomText}>{t('welcome.bottom')}</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
