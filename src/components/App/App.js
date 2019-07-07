import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './style';
import { ServiceProvider } from '../../contexts/ServiceContext';
import Header from '../Header';
import Feed from '../Feed';
import Panel from '../Panel';
import Paginator from '../Paginator';

class App extends Component {
  state = {
    activeItemId: null,
  }

  setActiveItem = (id) => {
    this.setState({ activeItemId: id });
  }

  render () {
    const { activeItemId } = this.state;
    const { setActiveItem } = this;

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <ServiceProvider>
            <Header />
            <Feed
              activeItemId={activeItemId}
              setActiveItem={setActiveItem} />
            <Panel
              activeItemId={activeItemId}
              setActiveItem={setActiveItem} />
            <Paginator />
          </ServiceProvider>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
