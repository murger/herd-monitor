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
  };

  togglePanel = (id) => {
    this.setState({ activeItemId: id });
  };

  render () {
    const { togglePanel } = this;
    const { activeItemId } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <ServiceProvider>
            <Header />
            <Feed
              showPanel={togglePanel}
              activeItemId={activeItemId} />
            <Panel
              hidePanel={() => togglePanel(null)}
              activeItemId={activeItemId} />
            <Paginator />
          </ServiceProvider>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
