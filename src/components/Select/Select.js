import React from 'react';
import { Wrapper, Selector } from './style';

const Select = (props) => (
  <Wrapper>
    <Selector>
      {props.children}
    </Selector>
  </Wrapper>
);

export default Select;
