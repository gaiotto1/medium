import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../../services/firebase';
import { useSnackbar } from 'react-simple-snackbar';

import { Container, Wrapper } from './styles';

const SignUp = () => {
  const navigate = useNavigate();
  const [openSnackbar] = useSnackbar();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateUserAccount() {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => { 
        openSnackbar('User created successfully.')
        navigate('/signin');
      })
      .catch(error => {
        const errorCode = error.code;

        if (errorCode === 'auth/weak-password') {
          return openSnackbar('The password must be at least 6 characters long.');
        }
        
        if (errorCode === 'auth/email-already-in-use') {
          return openSnackbar('This email is already being used.');
        }

        return openSnackbar('There was an error creating the account.');
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
          <a type="button" onClick={() => navigate('/signin')}>Sign in</a>
          <button type="button" onClick={handleCreateUserAccount}>Sign up</button>
        </form>
      </Wrapper>
    </Container>
  )
}

export default SignUp;