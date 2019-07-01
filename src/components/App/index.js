import React, { Component, Fragment } from 'react';
import { GlobalStyles } from './style';
import Header from '../Header';
import Transactions from '../Transactions';
import Paginator from '../Paginator';

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
