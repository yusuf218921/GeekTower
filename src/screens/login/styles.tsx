import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
	area: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.black
	},
	container: {
		padding: 16,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	formContainer: {
		width: '100%',
		flex: 1.5,
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	title: {
		fontSize: hp(6),
		color: COLORS.white2,
		fontFamily: 'roboto',
		fontWeight: 'bold',
		textAlign: 'center',
		maxWidth: wp(90)
	},
	bottom: {
		flexDirection: 'row'
	},
	bottomText: {
		color: COLORS.white3,
		fontSize: hp(1.7)
	},
	bottomLink: {
		color: COLORS.secondary,
		fontSize: hp(1.7)
	},
	separatorContainer: {
		flex: 0.25,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: hp(2)
	},
	separatorLine: {
		flex: 1,
		height: 1,
		backgroundColor: COLORS.grey
	},
	separatorText: {
		marginHorizontal: wp(3),
		color: COLORS.white3,
		fontSize: hp(2)
	},
	socialContainer: {
		width: '100%',
		gap: hp(2)
	},
	footerContainer: {
		flex: 0.5,
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	footerText: {
		color: COLORS.secondary,
		fontSize: hp(1.6)
	},
	policySeparator: {
		width: 1,
		height: hp(2),
		backgroundColor: COLORS.white3,
		marginHorizontal: wp(2)
	}
});
