import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/components/Header';

it('renders the correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
