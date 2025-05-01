// src/components/SocialButton.tsx
import React from 'react';
import {
	TouchableOpacity,
	TouchableOpacityProps,
	Text,
	Image,
	StyleSheet,
	StyleProp,
	ViewStyle,
	TextStyle,
	View
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../constants';

interface SocialButtonProps extends TouchableOpacityProps {
	title: string;
	icon: any;
	containerStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
}

const SocialButton: React.FC<SocialButtonProps> = ({ title, icon, onPress, containerStyle, textStyle, ...rest }) => {
	return (
		<TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress} activeOpacity={0.7} {...rest}>
			<View style={styles.iconWrapper}>
				<Image source={icon} style={styles.icon} resizeMode='contain' />
			</View>
			<Text style={[styles.text, textStyle]}>{title}</Text>
		</TouchableOpacity>
	);
};

export default SocialButton;

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: COLORS.white,
		paddingVertical: hp(1.5),
		paddingHorizontal: wp(4),
		borderRadius: wp(1.5),
		shadowColor: COLORS.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
		marginVertical: hp(0.5),
		height: hp(7)
	},
	iconWrapper: {
		width: wp(10),
		height: wp(10),
		marginRight: wp(3),
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden'
	},
	icon: {
		width: wp(8),
		height: wp(8)
	},
	text: {
		fontSize: hp(2),
		color: COLORS.dark,
		fontWeight: '600',
		flexShrink: 1
	}
});
