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
    selectedItemId: null,
  };

  showPanel = (id) => {
    this.setState({
      isPanelOpen: true,
      selectedItemId: id,
    });
  };

  hidePanel = () => {
    this.setState({
      isPanelOpen: false,
      selectedItemId: null,
    });
  };

  render () {
    const { showPanel, hidePanel } = this;
    const { selectedItemId, isPanelOpen } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles isPanelOpen={isPanelOpen} />
          <ServiceProvider>
            <Header />
            <Feed
              showPanel={showPanel}
              selectedItemId={selectedItemId} />
            <Paginator />
            <Panel
              isPanelOpen={isPanelOpen}
              hidePanel={hidePanel}
              selectedItemId={selectedItemId} />
          </ServiceProvider>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
