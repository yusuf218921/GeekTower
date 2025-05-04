// src/screens/__tests__/Register.test.tsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import Register from '../src/screens/register';
import { navigateMock } from '../__mocks__/@react-navigation/native';
import { mockChangeLanguage } from '../__mocks__/react-i18next';

import * as userService from '../src/lib/services/userService';
import { useToast } from '../src/lib/contexts/ToastProvider';

import enTranslations from '../src/localization/locales/en.json';
import trTranslations from '../src/localization/locales/en.json';

jest.mock('../src/lib/services/userService');
const getUserByEmailMock = userService.getUserByEmail as jest.Mock;
jest.mock('../src/lib/contexts/ToastProvider');
import { showToastMock } from '../__mocks__/contexts/ToastProvider';

describe('Register Screen', () => {
	beforeEach(() => {
		navigateMock.mockClear();
		getUserByEmailMock.mockReset();
		showToastMock.mockReset();
	});

	it('shows validation error on invalid email', () => {
		mockChangeLanguage('en');
		const { getByPlaceholderText, getByText } = render(<Register />);

		const input = getByPlaceholderText(enTranslations.register.emailPlaceHolder);
		fireEvent.changeText(input, 'not-an-email');
		fireEvent.press(getByText(enTranslations.register.registerButton));

		// should render the "invalid email" error text
		expect(getByText(enTranslations.error.emailNotVerified)).toBeTruthy();
	});

	it('renders all texts correctly in English', () => {
		mockChangeLanguage('en');
		const { getByText, getByPlaceholderText } = render(<Register />);

		expect(getByText(enTranslations.register.title)).toBeTruthy();
		expect(getByPlaceholderText(enTranslations.register.emailPlaceHolder)).toBeTruthy();
		expect(getByText(enTranslations.register.registerButton)).toBeTruthy();
		expect(getByText(enTranslations.register.bottomPrefix)).toBeTruthy();
		expect(getByText(enTranslations.register.bottomSuffix)).toBeTruthy();
		expect(getByText(enTranslations.register.orSeparator)).toBeTruthy();
	});

	it('renders all texts correctly in Turkish', () => {
		mockChangeLanguage('tr');
		const { getByText, getByPlaceholderText } = render(<Register />);

		expect(getByText(trTranslations.register.title)).toBeTruthy();
		expect(getByPlaceholderText(trTranslations.register.emailPlaceHolder)).toBeTruthy();
		expect(getByText(trTranslations.register.registerButton)).toBeTruthy();
		expect(getByText(trTranslations.register.bottomPrefix)).toBeTruthy();
		expect(getByText(trTranslations.register.bottomSuffix)).toBeTruthy();
		expect(getByText(trTranslations.register.orSeparator)).toBeTruthy();
	});

	it('calls showToast when email already exists', async () => {
		mockChangeLanguage('en');
		getUserByEmailMock.mockResolvedValue({ id: 'abc', email: 'foo@bar.com' });

		const { getByPlaceholderText, getByText } = render(<Register />);
		fireEvent.changeText(getByPlaceholderText(enTranslations.register.emailPlaceHolder), 'foo@bar.com');
		fireEvent.press(getByText(enTranslations.register.registerButton));

		await waitFor(() => {
			expect(showToastMock).toHaveBeenCalledWith({
				type: 'error',
				message: enTranslations.error.emailAlreadyExist
			});
		});
	});

	it('navigates to RegisterPassword when email is not found', async () => {
		mockChangeLanguage('en');
		getUserByEmailMock.mockResolvedValue(null);

		const { getByPlaceholderText, getByText } = render(<Register />);
		const testEmail = 'new@user.com';

		fireEvent.changeText(getByPlaceholderText(enTranslations.register.emailPlaceHolder), testEmail);
		fireEvent.press(getByText(enTranslations.register.registerButton));

		await waitFor(() => {
			expect(navigateMock).toHaveBeenCalledWith('RegisterPassword', { email: testEmail });
		});
	});
});
