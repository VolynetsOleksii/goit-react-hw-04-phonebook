import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: '#212121',
    black: '#000000',
    white: '#ffffff',
    gray: '#707070',
    lightGray: '#babdb7',
    green: '#00ff00',
    red: '#ff0000',
    lightBlue: '#14acdf',
  },
  shadows: {
    shadow: '0px 3px 20px 2px rgba(0, 0, 0, 0.1)',
  },
  transition: {
    cubicBezier: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
