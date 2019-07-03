import styled from 'styled-components';

export const Modal = styled.aside`
	z-index: 100;
  position: fixed;
  top: 0px;
  right: ${props => props.isOpen ? '0px' : '-320px'};
  width: 320px;
  height: 100%;
  padding: 32px;
  background-color: rgba(255, 255, 255, 0.95);
  border-left: 1px solid ${props => props.theme.lightgray};
  box-sizing: border-box;
  transition: right 0.3s ease;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${props => props.theme.navy};
  line-height: 68px;
`;

export const Close = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  font-size: 54px;
	font-weight: 100;
	line-height: 68px;
  color: ${props => props.theme.purple};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.blue};
  }
`;
