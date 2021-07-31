import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Router } from './pages';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
