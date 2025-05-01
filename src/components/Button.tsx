import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../constants';

interface ButtonProps extends TouchableOpacityProps {
	title: string;
	filled?: boolean;
	buttonStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({ title, filled, buttonStyle, textStyle, onPress, ...res }) => {
	return (
		<View style={[styles.container, styles.shadow]}>
			<TouchableOpacity
				style={[styles.buttonStyle, buttonStyle, { backgroundColor: filled ? COLORS.secondary : COLORS.white }]}
				onPress={onPress}
				{...res}>
				<Text style={[styles.textStyle, textStyle, { color: filled ? COLORS.dark : COLORS.primary }]}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Button;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginVertical: hp(1)
	},
	buttonStyle: {
		height: hp(7),
		justifyContent: 'center',
		borderRadius: wp(1.5)
	},
	textStyle: {
		textAlign: 'center',
		fontSize: hp(2),
		fontFamily: 'roboto',
		fontWeight: 700
	},
	shadow: {
		shadowColor: COLORS.primary,
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.3,
		shadowRadius: 10,
		elevation: 8
	}
});
