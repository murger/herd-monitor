import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from '../src/components/Dropdown';

it('renders correctly', () => {
  const tree = renderer.create(<Dropdown />).toJSON();

  expect(tree).toMatchSnapshot();
});
