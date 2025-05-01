import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
	area: {
		flex: 1,
		backgroundColor: COLORS.black
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15
	},
	header: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10
	},
	logoWrapper: {
		width: SIZES.width / 2,
		height: SIZES.width / 4,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		resizeMode: 'contain',
		width: SIZES.width,
		height: SIZES.width / 2
	},
	title: {
		fontSize: hp(3),
		fontFamily: 'roboto',
		fontWeight: 700,
		color: COLORS.white2
	},
	subtitle: {
		fontSize: hp(2.5),
		fontFamily: 'roboto',
		fontWeight: 500,
		color: COLORS.white2,
		maxWidth: '80%',
		textAlign: 'justify'
	},
	main: {
		flex: 2,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		gap: hp(2.5)
	},
	footer: {
		flex: 1,
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	bottomText: {
		fontSize: hp(2),
		fontFamily: 'roboto',
		fontWeight: 500,
		color: COLORS.white2
	}
});
