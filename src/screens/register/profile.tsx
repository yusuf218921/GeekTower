import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import log from '../../utils/logger';

export default function RegisterProfile() {
	useEffect(() => {
		log.info('RegisterProfile sayfası açıldı');
	}, []);
	return <View style={styles.container} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
