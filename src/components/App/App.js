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
    isPanelOpen: false,
    activeItemId: null,
  };

  showPanel = (id) => {
    this.setState({
      isPanelOpen: true,
      activeItemId: id,
    });
  };

  hidePanel = () => {
    this.setState({
      isPanelOpen: false,
      activeItemId: null,
    });
  };

  render () {
    const { showPanel, hidePanel } = this;
    const { activeItemId, isPanelOpen } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <ServiceProvider>
            <Header />
            <Feed
              showPanel={showPanel}
              activeItemId={activeItemId} />
            <Panel
              hidePanel={hidePanel}
              isPanelOpen={isPanelOpen}
              activeItemId={activeItemId} />
            <Paginator />
          </ServiceProvider>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
