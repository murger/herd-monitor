import React from 'react';
import { Wrapper, Selector } from './style';

const Dropdown = ({ children }) => (
  <Wrapper>
    <Selector>
      {children}
    </Selector>
  </Wrapper>
);

export default Dropdown;
