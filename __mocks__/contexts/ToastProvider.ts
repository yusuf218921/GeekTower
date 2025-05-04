// __mocks__/contexts/ToastProvider.ts
export const showToastMock = jest.fn();
export function useToast() {
	return { showToast: showToastMock };
}
