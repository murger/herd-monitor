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
	fontSize: 24,
	fontWeight: 900,
	lineHeight: 0.9,
	letterSpacing: -1,
});

const Header = () => {
	return (
		<Masthead>
			<Logo src={logo} />
			<Typeface>
				Herd<br />
				Monitor
			</Typeface>
		</Masthead>
	);
};

export default Header;
