import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import * as Snackbar from 'react-simple-snackbar'
import SignUp from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

jest.mock('../../hooks/useAuth', () => ({
  useAuth: () => jest.fn(),
}));

describe('SignUp', () => {
  beforeEach(() => {
    const openSnackbarMock = jest.fn()
    const closeSnackbarMock = jest.fn()
    jest.spyOn(Snackbar, 'useSnackbar').mockImplementation(() => [openSnackbarMock, closeSnackbarMock]);
  });

  it('should render the SignUp page', () => {
    render (
      <SignUp />
    );

    expect(screen.getAllByText('Sign up')).toHaveLength(2);
  });

  it('should update the email input', () => {
    render (
      <SignUp />
    );

    const emailInput = screen.getByTestId('email');
    fireEvent.change(emailInput, { target: { value: 'julio@gmail.com' } });
    expect(emailInput.value).toBe('julio@gmail.com');
  });

  it('should update the password input', () => {
    render (
      <SignUp />
    );

    const passwordInput = screen.getByTestId('password');
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    expect(passwordInput.value).toBe('123456');
  });
});
