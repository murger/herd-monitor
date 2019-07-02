import React from 'react';
import { TransactionConsumer } from '../../contexts/TransactionContext';
import { List, Item } from './style';

const TransactionList = () => {
	return (
		<List>
			<TransactionConsumer>
				{({ data, loading }) =>
					data.map((item, index) => (
						<Item key={index}>
							{item.id}
						</Item>
					))
				}
			</TransactionConsumer>
		</List>
	);
};

export default TransactionList;
