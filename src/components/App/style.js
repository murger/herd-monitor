import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
		max-width: 960px;
		margin: 0 auto;
    padding: 32px 24px;
    transition: padding 0.3s ease;
    -webkit-tap-highlight-color: transparent;

    @media (max-width: 960px) {
      padding-right: 16px !important;
    }

    @media (max-width: 480px) {
      padding: 32px 16px;
    }
  }
`;

export const theme = {
  red: '#cc3333',
  navy: '#090D45',
  purple: '#4629d3',
  blue: '#295cd3',
  gray: '#aaa',
  darkgray: '#777',
  lightgray: '#ccc',
  whiteish: '#f5f5f5',
  offwhite: '#eaeaea',
  offblack: '#333',
  radius: '4px',

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
