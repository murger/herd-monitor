import React from 'react';
import { ServiceConsumer } from '../../contexts/ServiceContext';
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
      <ServiceConsumer>
        {({ sortTransactions }) => (
          <Dropdown
            defaultValue="none"
            onChange={({ target: { value } }) => sortTransactions(value)}>
            <option value="none" disabled>Sort by</option>
            <option value="fromDate">Date</option>
            <option value="status">Status</option>
          </Dropdown>
        )}
      </ServiceConsumer>
    </span>
  </Masthead>
);

export default Header;
