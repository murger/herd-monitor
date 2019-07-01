import React, { Fragment } from 'react';
import { Wrapper, Selector } from './style';

const Select = (props) => {
	return (
    <Fragment>
      <Wrapper>
        <Selector>
          {props.children}
        </Selector>
      </Wrapper>
    </Fragment>
	);
};

export default Select;
