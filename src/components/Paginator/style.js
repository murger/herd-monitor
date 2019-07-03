import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 32px;
  box-sizing: border-box;
`;

export const Notice = styled.span`
  padding: 10px 12px;
  line-height: 16px;
  background-color: ${props => props.theme.offwhite};
  border-radius: 4px;
`;

export const Error = styled(Notice)`
  color: white;
  background-color: ${props => props.theme.error};
`;
