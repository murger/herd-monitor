import React from 'react';
import { Wrapper, Selector } from './style';

const Dropdown = (props) => (
  <Wrapper>
    <Selector>
      {props.children}
    </Selector>
  </Wrapper>
);

export default Dropdown;
