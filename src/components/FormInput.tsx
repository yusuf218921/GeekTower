import React, { FC, useState, useEffect } from 'react';
import { View, TextInput, TextInputProps, StyleProp, ViewStyle, StyleSheet, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';
import { COLORS } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Worklet dışında hesaplanacak sabitler
const LABEL_TOP_BLURRED = hp(2.3);
const LABEL_TOP_FOCUSED = -hp(1.4);
const FONT_BLURRED = hp(2);
const FONT_FOCUSED = hp(1.6);

export interface InputProps extends TextInputProps {
	id: string;
	errorText?: string;
	onInputChanged: (id: string, text: string) => void;
	inputStyle?: StyleProp<ViewStyle>;
}

const FormInput: FC<InputProps> = ({ id, value = '', placeholder, onInputChanged, inputStyle, errorText, ...rest }) => {
	const [isFocused, setIsFocused] = useState(false);
	const showFloating = isFocused || !!value;

	// 0 -> blur, 1 -> focus
	const progress = useSharedValue(showFloating ? 1 : 0);

	useEffect(() => {
		progress.value = withTiming(showFloating ? 1 : 0, { duration: 200 });
	}, [showFloating]);

	const animatedLabel = useAnimatedStyle(() => {
		const t = progress.value;
		// Artık hp() yerine sabitleri kullanıyoruz:
		const top = interpolate(t, [0, 1], [LABEL_TOP_BLURRED, LABEL_TOP_FOCUSED]);
		const fontSize = interpolate(t, [0, 1], [FONT_BLURRED, FONT_FOCUSED]);
		const opacity = t;
		const color = t > 0.5 ? (errorText ? COLORS.error : COLORS.secondary) : COLORS.grey;
		const backgroundColor = t > 0.5 ? COLORS.black : 'transparent';

		return {
			top,
			fontSize,
			opacity,
			color,
			backgroundColor,
			paddingHorizontal: 4
		};
	});

	return (
		<View style={[styles.container, inputStyle]}>
			<View
				style={[
					styles.inputWrapper,
					{ borderColor: showFloating ? (errorText ? COLORS.error : COLORS.secondary) : COLORS.white2 }
				]}>
				{placeholder && <Animated.Text style={[styles.labelBase, animatedLabel]}>{placeholder}</Animated.Text>}

				<TextInput
					value={value}
					placeholder={showFloating ? '' : placeholder}
					placeholderTextColor={COLORS.white3}
					style={styles.textInput}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onChangeText={text => onInputChanged(id, text)}
					{...rest}
				/>
			</View>

			{errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
		</View>
	);
};

export default FormInput;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginVertical: hp(1)
	},
	inputWrapper: {
		position: 'relative',
		borderWidth: 1,
		borderRadius: wp(1.5),
		backgroundColor: COLORS.black,
		paddingHorizontal: wp(3),
		paddingTop: hp(1),
		paddingBottom: hp(1),
		justifyContent: 'center'
	},
	labelBase: {
		position: 'absolute',
		left: wp(4)
	},
	textInput: {
		height: hp(5),
		fontSize: hp(2),
		color: COLORS.white2,
		paddingLeft: wp(2),
		textAlignVertical: 'center',
		margin: 0
	},
	errorText: {
		marginTop: hp(0.5),
		fontSize: hp(1.5),
		color: COLORS.error
	}
});
