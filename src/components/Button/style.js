import styled from 'styled-components';

export const Element = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  font-family: Mabry;
  color: white;
  background-color: ${props => props.theme.purple};
  border-radius: ${props => props.theme.radius};
  border: 0;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.blue};
  }
`;
