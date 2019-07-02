import React, { Component } from 'react';
import { DataConsumer } from '../../contexts/DataContext';
import { Wrapper, Button } from './style';

class Paginator extends Component {
	state = {
		hasScrollableArea: true,
	};

	trackScrollableArea = () => {
		const { innerHeight } = window;
		const { scrollTop, offsetHeight } = document.documentElement;
		const tolerance = 64;
		const hasScrollableArea = (innerHeight + scrollTop < offsetHeight - tolerance);

		this.setState({ hasScrollableArea });
	};

	// componentDidMount() {
	// 	window.addEventListener('scroll', this.trackScrollableArea);
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('scroll', this.trackScrollableArea);
	// }

	render () {
		return (
			<Wrapper>
				<DataConsumer>
					{({ loadTransactions }) => (
						<Button onClick={loadTransactions}>Load more</Button>
					)}
				</DataConsumer>
			</Wrapper>
		);
	}
}

export default Paginator;
