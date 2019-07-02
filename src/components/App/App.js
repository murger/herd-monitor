import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './style';
import { DataProvider } from '../../contexts/DataContext';
import Header from '../Header';
import TransactionList from '../TransactionList';
import Paginator from '../Paginator';

class App extends Component {
	render () {
		return (
			<ThemeProvider theme={theme}>
				<Fragment>
					<GlobalStyles />
					<DataProvider>
						<Header />
						<TransactionList />
						<Paginator />
					</DataProvider>
				</Fragment>
			</ThemeProvider>
		);
	}
}

export default App;
