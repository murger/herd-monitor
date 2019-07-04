import React from 'react';
import { format, differenceInCalendarDays } from 'date-fns';
import { Item, Id, Date, Price, Status } from './style';
import translateStatus from '../../utils/translateStatus';
import formatCurrency from '../../utils/formatCurrency';

const FeedItem = ({ item, ...props }) => (
  <Item {...props}>
    <Id>#{item.id}</Id>
    <Date>
      <span>{format(item.fromDate, "D MMM 'YY")}</span>
      <i>({differenceInCalendarDays(item.toDate, item.fromDate)}d)</i>
    </Date>
    <Price>
      {formatCurrency(item.price, item.currency)}
      {item.totalDiscount > 0 &&
        <del>{formatCurrency(item.totalDiscount, item.currency)}</del>
      }
    </Price>
    <Status type={item.status}>
      {translateStatus(item.status)}
    </Status>
  </Item>
);

export default FeedItem;
