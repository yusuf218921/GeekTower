// src/components/toast/ToastProvider.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, ViewStyle, View, TextStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay, runOnJS } from 'react-native-reanimated';
import { COLORS } from '../../constants';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type ToastType = 'success' | 'error' | 'warn' | 'info';
interface ToastOptions {
	type: ToastType;
	message: string;
	duration?: number;
}
interface ToastContextProps {
	showToast: (opts: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextProps>({ showToast: () => {} });
export const useToast = () => useContext(ToastContext);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [toast, setToast] = useState<ToastOptions & { visible: boolean }>({
		type: 'info',
		message: '',
		duration: 2000,
		visible: false
	});
	const progress = useSharedValue(0);

	const showToast = ({ type, message, duration = 2000 }: ToastOptions) => {
		setToast({ type, message, duration, visible: true });
	};

	useEffect(() => {
		if (!toast.visible) return;
		progress.value = 0;
		progress.value = withTiming(1, { duration: 300 }, finished => {
			if (finished) {
				progress.value = withDelay(
					toast.duration ?? 2000,
					withTiming(0, { duration: 300 }, finished2 => {
						if (finished2) {
							runOnJS(setToast)({ ...toast, visible: false });
						}
					})
				);
			}
		});
	}, [toast]);

	const animatedStyle = useAnimatedStyle(() => ({
		opacity: progress.value,
		transform: [
			{
				translateY: (1 - progress.value) * -20
			}
		]
	}));

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			{toast.visible && (
				<Animated.View style={[styles.toast, { backgroundColor: bgColors[toast.type] }, animatedStyle]}>
					<View style={styles.content}>
						<View style={styles.iconContainer}>
							<Text style={styles.icon}>{icons[toast.type]}</Text>
						</View>
						<Text style={styles.message}>{toast.message}</Text>
					</View>
				</Animated.View>
			)}
		</ToastContext.Provider>
	);
};

const bgColors: Record<ToastType, string> = {
	success: COLORS.success,
	error: COLORS.error,
	warn: COLORS.warn,
	info: COLORS.info
};

const icons: Record<ToastType, string> = {
	success: '✔️',
	error: '❌',
	warn: '⚠️',
	info: 'ℹ️'
};

const styles = StyleSheet.create({
	toast: {
		position: 'absolute',
		top: hp(8),
		left: hp(2.5),
		right: hp(2.5),
		padding: hp(1.5),
		borderRadius: hp(1),
		zIndex: 999,
		elevation: 10
	} as ViewStyle,
	content: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: hp(1.5),
		paddingVertical: hp(1.25)
	} as ViewStyle,
	iconContainer: {
		backgroundColor: COLORS.white,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 200,
		padding: hp(1.5),
		marginRight: wp(2)
	},
	icon: {
		fontSize: hp(2)
	} as TextStyle,
	message: {
		flex: 1,
		color: '#fff',
		fontSize: hp(2)
	} as TextStyle,
	text: {
		color: '#fff',
		textAlign: 'center',
		fontSize: hp(2)
	}
});
