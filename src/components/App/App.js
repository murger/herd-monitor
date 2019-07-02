import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './style';
import { ServiceProvider } from '../../contexts/ServiceContext';
import Header from '../Header';
import Feed from '../Feed';
import Paginator from '../Paginator';

class App extends Component {
  render () {
    return (
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
  }
}

export default App;
