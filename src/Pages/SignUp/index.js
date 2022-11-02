import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from '../../services/firebase';
import { useSnackbar } from 'react-simple-snackbar';

import { Container, Wrapper } from './styles';

const SignUp = () => {
  const navigate = useNavigate();
  const [openSnackbar] = useSnackbar();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate('/signin');
    })
    .catch((error) => {
      if (error.code === 'auth/weak-password') {
        openSnackbar(' Password should be at least 6 characters');
      }

      if (error.code === 'auth/email-already-in-use') {
        openSnackbar('Email already in use');
      }

      if (error.code === 'auth/invalid-email') {
        openSnackbar('Invalid email');
      }
    });
  }

  return (
    <Container>
      <Wrapper>
        <h1>Sign up</h1>

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
          <a onClick={() => navigate('/signin')}>Sign in</a>
          <button data-testid="sign-in-button" type="button" onClick={handleSignUp}>Sign up</button>
        </form>
      </Wrapper>
    </Container>
  )
}

export default SignUp;