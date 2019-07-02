import React from 'react';
import { Element } from './style';

const Button = ({ onClick, children }) => (
  <Element onClick={onClick}>
    {children}
  </Element>
);

export default Button;
