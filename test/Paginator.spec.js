import React from 'react';
import renderer from 'react-test-renderer';
import Paginator from '../src/components/Paginator';

it('renders the correctly', () => {
  const tree = renderer.create(<Paginator />).toJSON();
  expect(tree).toMatchSnapshot();
});
