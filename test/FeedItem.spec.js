import React from 'react';
import renderer from 'react-test-renderer';
import FeedItem from '../src/components/FeedItem';

it('renders correctly', () => {
  const data = {
    'id': 35886,
    'lenderId': 8676,
    'borrowerId': 68115,
    'itemId': 3949,
    'fromDate': '2018-02-15 00:00:00+00',
    'toDate': '2018-02-16 00:00:00+00',
    'status': 'FL_APPROVED',
    'promocode': null,
    'creditUsed': 0,
    'price': 2025,
    'totalDiscount': 0,
    'currency': 'GBP',
  };
  const tree = renderer.create(<FeedItem item={data} />).toJSON();

  expect(tree).toMatchSnapshot();
});
