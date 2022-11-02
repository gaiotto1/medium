import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import * as Snackbar from 'react-simple-snackbar'
import SignIn from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

jest.mock('../../hooks/useAuth', () => ({
  useAuth: () => jest.fn(),
}));

describe('SignIn', () => {
  beforeEach(() => {
    const openSnackbarMock = jest.fn()
    const closeSnackbarMock = jest.fn()
    jest.spyOn(Snackbar, 'useSnackbar').mockImplementation(() => [openSnackbarMock, closeSnackbarMock]);
  });

  it('should render the SignIn page', () => {
    render (
      <SignIn />
    );

    expect(screen.getAllByText('Sign in')).toHaveLength(2);
  });

  it('should update the email input', () => {
    render (
      <SignIn />
    );

    const emailInput = screen.getByTestId('email');
    fireEvent.change(emailInput, { target: { value: 'julio@gmail.com' } });
    expect(emailInput.value).toBe('julio@gmail.com');
  });

  it('should update the password input', () => {
    render (
      <SignIn />
    );

    const passwordInput = screen.getByTestId('password');
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    expect(passwordInput.value).toBe('123456');
  });
});