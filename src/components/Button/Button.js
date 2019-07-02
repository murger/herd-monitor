import React from 'react';
import { Element } from './style';

const Button = ({ children, onClick }) => (
  <Element onClick={onClick}>
    {children}
  </Element>
);

export default Button;
