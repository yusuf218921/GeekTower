// src/navigation/RootNavigator.tsx
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '../screens/welcome/index';

export type RootStackParamList = {
	Welcome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name='Welcome' component={WelcomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
