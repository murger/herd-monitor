import React from 'react';
import Select from '../Select/Select';
import { Masthead, Logo, Typeface } from './style';
import larry from '../../../pub/larry.svg';

const Header = () => {
	return (
		<Masthead>
			<span>
				<Logo src={larry} />
				<Typeface>
					Herd<br />
					Monitor
				</Typeface>
			</span>
			<span>
        <Select>
          <option disabled>Sort By</option>
          <option>Date</option>
          <option>Status</option>
        </Select>
			</span>
		</Masthead>
	);
};

export default Header;
