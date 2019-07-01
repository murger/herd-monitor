import React from 'react';
import styled from 'styled-components';

const List = styled.ul({
	width: '100%',
	margin: 0,
	padding: 32,
	boxSizing: 'border-box',
	listStyle: 'none',
});

const Item = styled.li({
	padding: '8px 0',
});

const Transactions = () => {
	return (
		<List>
			<Item>Alpha</Item>
			<Item>Beta</Item>
			<Item>Gamma</Item>
		</List>
	);
};

export default Transactions;
