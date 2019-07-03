import React from 'react';
import Dropdown from '../Dropdown';
import { Masthead, Logo, Typeface } from './style';
import larry from '../../../pub/larry.svg';

const Header = () => (
  <Masthead>
    <span>
      <Logo src={larry} />
      <Typeface>
				Herd<br />
				Monitor
      </Typeface>
    </span>
    <span>
      <Dropdown defaultValue={0}>
        <option value={0} disabled>Sort by</option>
        <option>Date</option>
        <option>Status</option>
      </Dropdown>
    </span>
  </Masthead>
);

export default Header;
