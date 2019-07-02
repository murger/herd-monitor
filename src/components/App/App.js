import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './style';
import { TransactionProvider } from '../../contexts/TransactionContext';
import Header from '../Header';
import TransactionList from '../TransactionList';
import Paginator from '../Paginator';

class App extends Component {
	render () {
		return (
			<ThemeProvider theme={theme}>
				<Fragment>
					<GlobalStyles />
					<TransactionProvider>
						<Header />
						<TransactionList />
						<Paginator />
					</TransactionProvider>
				</Fragment>
			</ThemeProvider>
		);
	}
}

export default App;
