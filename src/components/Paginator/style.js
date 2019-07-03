import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 32px;
  box-sizing: border-box;
`;

export const Notice = styled.span`
  padding: 12px;
  line-height: 16px;
  border-radius: ${props => props.theme.radius};
`;

export const Error = styled(Notice)`
  color: ${props => props.theme.red};
`;
