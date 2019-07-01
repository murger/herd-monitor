import React from 'react';
import styled from 'styled-components';

const List = styled.ul({
	width: '100%',
	margin: 0,
	padding: 32,
	boxSizing: 'border-box',
	listStyle: 'none',
});

const Transactions = () => {
	return (
		<List>
			<li>Alpha</li>
			<li>Beta</li>
			<li>Gamma</li>
		</List>
	);
};

export default Transactions;
