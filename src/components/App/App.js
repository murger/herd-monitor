import React, { Component, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from '../Header';
import Transactions from '../Transactions';
import Paginator from '../Paginator';

const GlobalStyles = createGlobalStyle({
  body: {
		margin: '0 auto',
		padding: '16px 0',
		maxWidth: 960,
		fontFamily: 'Mabry-Medium, Helvetica, Arial',
  }
});

class App extends Component {
	render () {
		return (
			<Fragment>
				<GlobalStyles />
				<Header />
				<Transactions />
				<Paginator />
			</Fragment>
		);
	}
}

export default App;
