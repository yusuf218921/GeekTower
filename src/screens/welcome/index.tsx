// src/screens/WelcomeScreen.tsx
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function WelcomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>👋 GeekTower'a Hoş Geldin!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
	text: {fontSize: 20, fontWeight: '600'}
});
