import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import Header from '../components/Header';

import { Container } from './styles';

export function DefaultLayout() {
  const navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user, navigate]);

  return (
    <Container>
      <Outlet />
      <Header />
    </Container>
  );
}