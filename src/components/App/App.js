import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './style';
import Header from '../Header/Header';
import Transactions from '../Transactions/Transactions';
import Paginator from '../Paginator/Paginator';

class App extends Component {
	render () {
		return (
			<ThemeProvider theme={theme}>
				<Fragment>
					<GlobalStyles />
					<Header />
					<Transactions />
					<Paginator />
				</Fragment>
			</ThemeProvider>
		);
	}
}

export default App;
