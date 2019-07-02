import React from 'react';
import { Wrapper, Select } from './style';

const Dropdown = ({ children }) => (
  <Wrapper>
    <Select>
      {children}
    </Select>
  </Wrapper>
);

export default Dropdown;
