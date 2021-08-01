import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Router } from './pages';
import { ChakraProvider, ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
