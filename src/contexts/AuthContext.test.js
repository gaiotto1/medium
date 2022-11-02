import React from 'react';
import { render } from "@testing-library/react";
import { AuthProvider } from './AuthContext';

describe('AuthProvider', () => {
  it('should render children', () => {
    const { getByText } = render(
      <AuthProvider>
        <div>Test</div>
      </AuthProvider>
    );
    expect(getByText('Test')).toBeTruthy();
  });
});