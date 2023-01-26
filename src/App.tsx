import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';

const theme = extendTheme({
  sizes: {
    headerHeight: '30px',
    footerHeight: '60px',
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />

        <Main />

    </ChakraProvider>
  );
}

export default App;
