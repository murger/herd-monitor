import React from 'react';
import { DataConsumer } from '../../contexts/DataContext';
import { Wrapper, Button } from './style';

const Paginator = () => (
	<Wrapper>
		<DataConsumer>
			{({ loadTransactions }) => (
				<Button onClick={loadTransactions}>Load more</Button>
			)}
		</DataConsumer>
	</Wrapper>
);

export default Paginator;
