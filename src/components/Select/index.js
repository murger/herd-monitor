import React from 'react';
import { Wrapper, Selector } from './style';

const Select = (props) => {
	return (
		<Wrapper>
			<Selector>
				{props.children}
			</Selector>
		</Wrapper>
	);
};

export default Select;
