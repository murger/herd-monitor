import React from 'react';
import { SelectWrapper, Selector } from './styled';

const Select = (props) => {
	return (
		<SelectWrapper>
			<Selector>
				{props.children}
			</Selector>
		</SelectWrapper>
	);
};

export default Select;
