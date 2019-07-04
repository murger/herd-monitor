import React from 'react';
import { Wrapper, Select } from './style';

const Dropdown = ({ expand, color, children, ...props }) => (
  <Wrapper expand={expand} color={color}>
    <Select {...props}>
      {children}
    </Select>
  </Wrapper>
);

export default Dropdown;
