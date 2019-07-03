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
    itemId: null,
    isPanelOpen: false,
  };

  showPanel = (id) => {
    this.setState({
      itemId: id,
      isPanelOpen: true,
    });
  };

  hidePanel = () => {
    this.setState({ isPanelOpen: false });
  };

  render () {
    const { itemId, isPanelOpen } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <ServiceProvider>
            <Header />
            <Feed showPanel={this.showPanel} />
            <Paginator />
            <Panel
              itemId={itemId}
              isOpen={isPanelOpen}
              hidePanel={this.hidePanel} />
          </ServiceProvider>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
