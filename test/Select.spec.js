import React from 'react';
import renderer from 'react-test-renderer';
import Select from '../src/components/Select';

it('renders the correctly', () => {
  const tree = renderer.create(<Select />).toJSON();
  expect(tree).toMatchSnapshot();
});
