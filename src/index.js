import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    border: none;
    &:focus {
      outline: none;
    }
  }

  select {
    outline: none;
    border: none;
    background-color: transparent;
  }
`

const theme = {
  media: {
    phone: '(max-width: 830px)' 
  }
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Global/>
        <Provider store={store}>
          <App />
        </Provider>
    </ThemeProvider>
  </React.StrictMode>
);