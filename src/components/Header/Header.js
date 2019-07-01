import React from 'react';
import Select from '../Select';
import { Masthead, Logo, Typeface } from './styled';
import logo from '../../../pub/larry.svg';

const Header = () => {
	return (
		<Masthead>
			<span>
				<Logo src={logo} />
				<Typeface>
					Herd<br />
					Monitor
				</Typeface>
			</span>
			<span>
				<Select>
					<option>Date</option>
					<option>Status</option>
				</Select>
			</span>
		</Masthead>
	);
};

export default Header;
