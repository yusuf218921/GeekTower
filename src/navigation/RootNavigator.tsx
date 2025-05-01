// src/navigation/RootNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AuthNavigator from './AuthNavigator';
import { initAuthListener, useAuthStore } from '../lib/stores/authStore';

export default function RootNavigator() {
	const [checked, setChecked] = useState(false);
	const isAuth = useAuthStore(s => s.isAuthenticated);

	useEffect(() => {
		initAuthListener();
		setChecked(true);
	}, []);

	if (!checked) return;
	return (
		<NavigationContainer>
			<AuthNavigator />
		</NavigationContainer>
	);
}
