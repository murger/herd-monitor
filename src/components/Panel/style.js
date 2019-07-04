import styled from 'styled-components';

export const Modal = styled.aside`
	z-index: 100;
  position: fixed;
  top: 0px;
  right: ${props => props.isOpen ? '0px' : '-360px'};
  width: 360px;
  height: 100%;
  padding: 32px 24px;
  background-color: rgba(255, 255, 255, 0.95);
  border-left: 1px solid ${props => props.theme.lightgray};
  box-sizing: border-box;
  transition: right 0.3s ease;

  @media (max-width: 480px) {
    width: 320px;
    right: ${props => props.isOpen ? '0px' : '-320px'};
  }
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 24px;
  color: ${props => props.theme.navy};
  line-height: 70px;
`;

export const Close = styled.div`
  position: absolute;
  top: 32px;
  right: 8px;
  padding: 6px 16px;
  margin: 0;
  font-size: 54px;
	font-weight: 100;
	line-height: 56px;
  color: ${props => props.theme.lightgray};
  cursor: pointer;
  user-select: none;

  &:hover {
    color: ${props => props.theme.red};
  }
`;

export const Fieldset = styled.fieldset`
  border: 0ch;
	border-top: 1px solid ${props => props.theme.gray};
	margin: 16px 0;
  padding: 0;

  legend {
    color: ${props => props.theme.gray};
    margin-bottom: 4px;
	  padding: 0;
    padding-right: 8px;
  }
`;

export const User = styled.div`
  span {
    display: block;
    color: ${props => props.theme.darkgray};
  }

  i {
    display: block;
    font-style: normal;
    color: ${props => props.theme.gray};
  }
`;

export const Date = styled.div`
  color: ${props => props.theme.darkgray};

  i {
    padding-right: 8px;
    font-style: normal;

    &:first-child:after {
      padding-left: 8px;
      content: '–';
    }
  }

  span {
    color: ${props => props.theme.lightgray};
  }
`;

export const Price = styled.div`
  color: ${props => props.theme.darkgray};

  del {
    padding-left: 8px;
    color: ${props => props.theme.gray};
  }

  span {
    padding-left: 8px;
    color: ${props => props.theme.lightgray};
  }
`;
