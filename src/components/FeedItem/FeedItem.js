import React from 'react';
import { format } from 'date-fns';
import { Item, Id, Date } from './style';

const formatDate = (date) => (
  format(date, 'D MMM')
);

const FeedItem = ({ data }) => (
  <Item>
    <Id>#{data.id}</Id>
    <Date>
      {formatDate(data.fromDate)} &rarr; {formatDate(data.toDate)}
    </Date>
  </Item>
);

export default FeedItem;
