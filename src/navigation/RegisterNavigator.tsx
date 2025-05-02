import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { RegisterStackParamList } from './types';
import RegisterEmail from '../screens/register';
import RegisterPassword from '../screens/register/password';
import RegisterProfile from '../screens/register/profile';
import RegisterAvatar from '../screens/register/profile';
import { RouteProp } from '@react-navigation/native';
import { StackAnimationTypes } from 'react-native-screens';

const Stack = createNativeStackNavigator<RegisterStackParamList>();

export default function RegisterNavigator() {
	return (
		<Stack.Navigator
			screenOptions={({ route }) => {
				const anim = ((route.params as any)?.animation as StackAnimationTypes) ?? 'slide_from_right';
				return {
					headerShown: false,
					animation: anim,
					detachPreviousScreen: false
				};
			}}>
			<Stack.Screen name='RegisterEmail' component={RegisterEmail} />
			<Stack.Screen name='RegisterPassword' component={RegisterPassword} initialParams={{ email: '' }} />
			<Stack.Screen name='RegisterProfile' component={RegisterProfile} />
			<Stack.Screen name='RegisterAvatar' component={RegisterAvatar} />
		</Stack.Navigator>
	);
}
