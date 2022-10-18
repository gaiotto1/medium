import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../../services/firebase';
import { useSnackbar } from 'react-simple-snackbar';

import { Container, Wrapper } from './styles';

const SignIn = () => {
  const navigate = useNavigate();
  const [openSnackbar] = useSnackbar();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignInWithEmailAndPassword() {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        openSnackbar('User logged in successfully.');
        navigate('/');
      })
      .catch(error => {
        const errorCode = error.code;
        
        if (errorCode === 'auth/invalid-email') {
          return openSnackbar('Invalid email.');
        }

        if (errorCode === 'auth/user-disabled') {
          return openSnackbar('This user is disabled.');
        }

        if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
          return openSnackbar('User not found. Incorrect email and/or passwords.');
        }
      });
  }

  return (
    <Container>
      <Wrapper>
        <h1>Sign in</h1>

        <form>
          <div>
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <a type="button" onClick={() => navigate('/signup')}>Sign up</a>

          <button type="button" onClick={handleSignInWithEmailAndPassword}>Sign in</button>
        </form>
      </Wrapper>
    </Container>
  )
}

export default SignIn;