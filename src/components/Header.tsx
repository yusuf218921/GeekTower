import React from 'react';
import { StyleProp, TextStyle, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { icons } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type HeaderProp = {
	title?: string;
	textStyle?: StyleProp<TextStyle>;
	onBackPress?: () => void;
};

const Header: React.FC<HeaderProp> = ({ title, textStyle, onBackPress }) => (
	<View style={styles.container}>
		<TouchableOpacity onPress={onBackPress}>
			<Image source={icons.leftArrow} style={styles.icon} />
		</TouchableOpacity>
		{title && <Text style={[styles.title, textStyle]}>{title}</Text>}
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%'
	},
	title: {
		fontSize: hp(2),
		fontWeight: '600',
		marginLeft: hp(1),
		alignSelf: 'center'
	},
	icon: {
		height: hp(4),
		width: hp(4)
	}
});

export default Header;
