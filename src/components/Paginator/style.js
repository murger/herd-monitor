import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 32px 24px;
`;

export const Button = styled.button`
  padding: 10px 12px;
  font-size: 16px;
  font-weight: 500;
  font-family: Mabry;
  color: white;
  background-color: ${props => props.theme.purple};
  border-radius: 4px;
  border: 0;
  outline: none;
`;
