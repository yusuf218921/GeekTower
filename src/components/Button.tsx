import React from 'react';
import {
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
	ViewStyle,
	ActivityIndicator
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../constants';
import { useTheme } from 'react-native-paper';

interface ButtonProps extends TouchableOpacityProps {
	title: string;
	filled?: boolean;
	loading?: boolean;
	buttonStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({ title, filled = false, loading = false, buttonStyle, textStyle, onPress, ...rest }) => {
	const theme = useTheme();
	return (
		<View style={[styles.container, styles.shadow]}>
			<TouchableOpacity
				style={[styles.buttonStyle, buttonStyle, { backgroundColor: filled ? theme.colors.primary : theme.colors.secondary }]}
				onPress={onPress}
				disabled={loading || rest.disabled}
				{...rest}>
				{loading ? (
					<ActivityIndicator size='small' color={filled ? theme.colors.onPrimary : theme.colors.onSecondary} />
				) : (
					<Text style={[styles.textStyle, textStyle, { color: filled ? theme.colors.onPrimary : theme.colors.onSecondary }]}>
						{title}
					</Text>
				)}
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
		alignItems: 'center',
		borderRadius: wp(1.5)
	},
	textStyle: {
		textAlign: 'center',
		fontSize: hp(2),
		fontFamily: 'roboto',
		fontWeight: '700'
	},
	shadow: {
		shadowColor: COLORS.primary,
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.3,
		shadowRadius: 10,
		elevation: 8
	}
});
