import React from 'react';
import { Item } from './style';

const FeedItem = ({ data }) => (
  <Item>
		#{data.lenderId} &rarr; #{data.borrowerId}
  </Item>
);

export default FeedItem;
