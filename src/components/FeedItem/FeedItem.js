import React from 'react';
import { format, differenceInCalendarDays } from 'date-fns';
import { Item, Id, Date, Status } from './style';

const FeedItem = ({ item }) => (
  <Item>
    <Id>#{item.id}</Id>
    <Date>
      {format(item.fromDate, 'D MMM')}
      &nbsp;
      ({differenceInCalendarDays(item.toDate, item.fromDate)}d)
    </Date>
    <Status type={item.status}>
      {item.status}
    </Status>
  </Item>
);

export default FeedItem;
