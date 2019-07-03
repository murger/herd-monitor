import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './style';
import { ServiceProvider } from '../../contexts/ServiceContext';
import Header from '../Header';
import Feed from '../Feed';
import Paginator from '../Paginator';

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <ServiceProvider>
        <Header />
        <Feed />
        <Paginator />
      </ServiceProvider>
    </Fragment>
  </ThemeProvider>
);

export default App;
