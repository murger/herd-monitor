import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 32px 24px;
  padding-bottom: 64px;
  box-sizing: border-box;
`;

export const Notice = styled.span`
  padding: 10px 12px;
  line-height: 16px;
  color: ${props => props.error ? 'white' : 'inherit'};
  background-color: ${props => props.error ? '#cc3333' : '#f0f0f0'};
  border-radius: 4px;
`;
