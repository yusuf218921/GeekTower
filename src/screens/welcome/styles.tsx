import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

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
		width: 256,
		height: 128,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		resizeMode: 'contain',
		width: 500,
		height: 250
	},
	title: {
		fontSize: 21,
		fontFamily: 'roboto',
		fontWeight: 700,
		color: COLORS.white2
	},
	subtitle: {
		fontSize: 16,
		fontFamily: 'roboto',
		fontWeight: 500,
		color: COLORS.white2,
		maxWidth: '80%'
	},
	main: {
		flex: 2,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 30
	},
	footer: {
		flex: 1,
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	bottomText: {
		fontSize: 14,
		fontFamily: 'roboto',
		fontWeight: 500,
		color: COLORS.white2
	}
});
