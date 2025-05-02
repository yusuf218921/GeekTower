// src/navigation/AuthNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList, RootStackParamList } from './types';
import Welcome from '../screens/welcome';
import Login from '../screens/login';
import RegisterNavigator from './RegisterNavigator';
import { StackAnimationTypes } from 'react-native-screens';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
	return (
		<Stack.Navigator
			initialRouteName='Welcome'
			screenOptions={({ route }) => {
				const anim = ((route.params as any)?.animation as StackAnimationTypes) ?? 'slide_from_right';
				return {
					headerShown: false,
					animation: anim
				};
			}}>
			<Stack.Screen name='Welcome' component={Welcome} />
			<Stack.Screen name='Login' component={Login} />
			<Stack.Screen name='Register' component={RegisterNavigator} />
		</Stack.Navigator>
	);
}
