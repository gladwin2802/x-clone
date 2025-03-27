import { render, screen, act } from '@testing-library/react';
import { UserProvider, useUser } from '../UserContext';

const TestComponent = () => {
    const { userDetails, updateUserDetails } = useUser();
    return (
        <div>
            <div data-testid="user-name">{userDetails.name}</div>
            <button onClick={() => updateUserDetails({ name: 'New Name' })}>
                Update Name
            </button>
        </div>
    );
};

describe('UserContext', () => {
    test('provides initial user details', () => {
        render(
            <UserProvider>
                <TestComponent />
            </UserProvider>
        );

        expect(screen.getByTestId('user-name')).toHaveTextContent('GLADWIN A J');
    });

    test('updates user details', () => {
        render(
            <UserProvider>
                <TestComponent />
            </UserProvider>
        );

        act(() => {
            screen.getByText('Update Name').click();
        });

        expect(screen.getByTestId('user-name')).toHaveTextContent('New Name');
    });
});