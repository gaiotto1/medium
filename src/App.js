import React from 'react';
import SnackbarProvider from 'react-simple-snackbar';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <SnackbarProvider>
          <Router />
        </SnackbarProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
