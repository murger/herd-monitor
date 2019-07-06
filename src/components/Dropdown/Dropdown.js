import React from 'react';
import { Wrapper, Select } from './style';

const Dropdown = ({ expanded, color, children, ...props }) => (
  <Wrapper expanded={expanded} color={color}>
    <Select {...props}>
      {children}
    </Select>
  </Wrapper>
);

export default Dropdown;
