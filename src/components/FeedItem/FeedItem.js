import React from 'react';
import { Item } from './style';

const FeedItem = ({ transaction }) => (
	<Item>
		#{transaction.lenderId} &rarr; #{transaction.borrowerId}
	</Item>
);

export default FeedItem;
