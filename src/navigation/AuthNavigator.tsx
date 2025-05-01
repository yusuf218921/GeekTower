// src/navigation/AuthNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';
import Welcome from '../screens/welcome';
import Login from '../screens/login';
import Register from '../screens/register';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
	return (
		<Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Welcome' component={Welcome} />
			<Stack.Screen name='Login' component={Login} />
			<Stack.Screen name='Register' component={Register} />
		</Stack.Navigator>
	);
}
