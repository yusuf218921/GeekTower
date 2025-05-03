import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Check, X } from 'lucide-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../../constants';

type ValidationItemProps = {
	isValid: boolean;
	text: string;
};

export const ValidationItem: React.FC<ValidationItemProps> = ({ isValid, text }) => (
	<View style={styles.validationItem}>
		<View style={[styles.validationIcon, isValid ? styles.validIconBg : styles.invalidIconBg]}>
			{isValid ? <Check size={12} color='#FFFFFF' /> : <X size={12} color='#FFFFFF' />}
		</View>
		<Text style={[styles.validationText, isValid && styles.validText]}>{text}</Text>
	</View>
);

const styles = StyleSheet.create({
	validationItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8
	},
	validationIcon: {
		width: 20,
		height: 20,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 8
	},
	validIconBg: {
		backgroundColor: COLORS.success
	},
	invalidIconBg: {
		backgroundColor: COLORS.error
	},
	validationText: {
		fontFamily: 'roboto',
		fontSize: 14,
		color: COLORS.gray2
	},
	validText: {
		color: COLORS.success
	}
});
