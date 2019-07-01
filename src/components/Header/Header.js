import React from 'react';
import styled from 'styled-components';
import logo from '../../../pub/larry.svg';

const Masthead = styled.header({
	width: '100%',
	padding: 32,
	boxSizing: 'border-box',
});

const Logo = styled.img({
	height: 48,
});

const Typeface = styled.div({
	display: 'inline-block',
	marginLeft: 8,
	color: '#090D45',
	fontFamily: 'Mabry-Black, Helvetica, Arial',
	fontSize: 24,
	lineHeight: 0.9,
	letterSpacing: -0.5,
});

const Header = () => {
	return (
		<Masthead>
			<Logo src={logo} />
			<Typeface>Herd<br />Monitor</Typeface>
		</Masthead>
	);
};

export default Header;
