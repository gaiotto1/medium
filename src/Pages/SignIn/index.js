import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from '../../services/firebase';
import { useSnackbar } from 'react-simple-snackbar';
import { useAuth } from '../../hooks/useAuth';

import { Container, Wrapper } from './styles';

const SignIn = () => {
  const navigate = useNavigate();
  const user = useAuth();
  const [openSnackbar] = useSnackbar();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        openSnackbar('Wrong password');
      }

      if (error.code === 'auth/user-not-found') {
        openSnackbar('User not found');
      }

      if (error.code === 'auth/invalid-email') {
        openSnackbar('Invalid email');
      }
    });
  }

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <Container>
      <Wrapper>
        <h1>Sign in</h1>

        <form>
          <div>
            <label>Email Address</label>
            <input
              data-testid="email"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              data-testid="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <a onClick={() => navigate('/signup')}>Sign up</a>

          <button data-testid="sign-in-button" type="button" onClick={handleSignIn}>Sign in</button>
        </form>
      </Wrapper>
    </Container>
  )
}

export default SignIn;