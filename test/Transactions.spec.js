import React from 'react';
import renderer from 'react-test-renderer';
import Transactions from '../src/components/Transactions';

it('renders the correctly', () => {
  const tree = renderer.create(<Transactions />).toJSON();
  expect(tree).toMatchSnapshot();
});
