import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from './components/Global.styled';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    black: '#212121',
    lightGray: '#e4eaf0',
    lightGrayHover: '#aeb9c2',
    lightBlue: '#2196f3',
    lightBlueHover: '#188ce8',

    white: '#fff',
    red: 'red',
    green: 'green',
    orange: 'orange',
  },
  radii: {
    sm: '2px',
    md: '6px',
    lg: '12px',
  },

  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
