// src/screens/__tests__/WelcomeScreen.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { navigateMock } from '../__mocks__/@react-navigation/native';

import WelcomeScreen from '../src/screens/welcome';
import { mockChangeLanguage } from '../__mocks__/react-i18next';

describe('WelcomeScreen', () => {
	beforeEach(() => {
		navigateMock.mockClear();
	});

	it('Login butonuna basılınca Login sayfasına gider', () => {
		mockChangeLanguage('en');
		const { getByText } = render(<WelcomeScreen />);
		const loginBtn = getByText('Enter the Tower');
		fireEvent.press(loginBtn);
		expect(navigateMock).toHaveBeenCalledWith('Login');
	});

	it('Register butonuna basılınca Register sayfasına gider', () => {
		mockChangeLanguage('en');
		const { getByText } = render(<WelcomeScreen />);
		const regBtn = getByText('Begin Your Journey');
		fireEvent.press(regBtn);
		expect(navigateMock).toHaveBeenCalledWith('Register');
	});

	it('Dil "tr" iken metinler Türkçe gösterilir', () => {
		mockChangeLanguage('tr'); // Test öncesi dili Türkçe yap
		const { getByText } = render(<WelcomeScreen />);
		expect(getByText('GeekTower’a Hoş Geldin!')).toBeTruthy();
		expect(getByText('Kuleye Giriş Yap')).toBeTruthy();
		expect(getByText('Yolculuğa Başla')).toBeTruthy();
		expect(getByText('© 2025 GeekTower · Tüm hakları saklıdır.')).toBeTruthy();
	});
});
