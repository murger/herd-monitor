import React from 'react';
import { DataConsumer } from '../../contexts/DataContext';
import { List, Item } from './style';

const TransactionList = () => {
	return (
		<List>
			<DataConsumer>
				{({ data }) => (
					data.map((item, index) => (
						<Item key={index}>
							#{item.lenderId} &rarr; #{item.borrowerId}
						</Item>
					))
				)}
			</DataConsumer>
		</List>
	);
};

export default TransactionList;
