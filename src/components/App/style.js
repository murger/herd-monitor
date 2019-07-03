import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
		margin: 0 auto;
		padding: 0;
		max-width: 960px;
  }
`;

export const theme = {
  navy: '#090D45',
  purple: '#4629d3',
  blue: '#295cd3',
  gray: '#aaa',
  darkgray: '#999',
  offwhite: '#f0f0f0',
  error: '#cc3333',

  getStatusColour: (type) => {
    switch (type) {
      case 'PRE_AUTHORIZED_CANCELLED':
      case 'CANCELLED':
        return '#cc3333';
      case 'PRE_AUTHORIZED':
        return '#3399aa';
      case 'FL_APPROVED':
        return '#33cc99';
      case 'PAID':
        return '#00cc33';
      case 'ESCROW':
        return '#3333cc';
      default:
        return 'black';
    }
  },
};
