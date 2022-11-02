import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider } from '../contexts/AuthContext';
import { useAuth } from './useAuth';


describe('useAuth', () => {
  it('should return the user null', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => (
        <AuthProvider>
          {children}
        </AuthProvider>
      ),
    });
    expect(result.current).toBe(null);
  });
});