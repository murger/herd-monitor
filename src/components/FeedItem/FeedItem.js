import React from 'react';
import { format, differenceInCalendarDays } from 'date-fns';
import { Item, Id, Date, Price, Status } from './style';
import translate from '../../utils/translate';
import formatCurrency from '../../utils/formatCurrency';

const FeedItem = ({ item, ...props }) => (
  <Item {...props}>
    <Id>#{item.id}</Id>
    <Date>
      {format(item.fromDate, "D MMM 'YY")}
      &nbsp;
      ({differenceInCalendarDays(item.toDate, item.fromDate)}d)
    </Date>
    <Price>
      {formatCurrency(item.price, item.currency)}
      {item.totalDiscount > 0 &&
        <del>{formatCurrency(item.totalDiscount, item.currency)}</del>
      }
    </Price>
    <Status type={item.status}>
      {translate(item.status)}
    </Status>
  </Item>
);

export default FeedItem;
