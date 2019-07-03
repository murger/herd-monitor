import React from 'react';
import { Wrapper, Select } from './style';

const Dropdown = ({ expand = false, children, ...props }) => (
  <Wrapper expand={expand}>
    <Select {...props}>
      {children}
    </Select>
  </Wrapper>
);

export default Dropdown;
