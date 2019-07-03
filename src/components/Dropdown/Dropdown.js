import React from 'react';
import { Wrapper, Select } from './style';

const Dropdown = ({ children, ...props }) => (
  <Wrapper>
    <Select {...props}>
      {children}
    </Select>
  </Wrapper>
);

export default Dropdown;
