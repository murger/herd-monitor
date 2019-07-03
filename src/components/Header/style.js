import styled from 'styled-components';

export const Masthead = styled.header`
  width: 100%;
  margin-bottom: 32px;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 48px;
`;

export const Typeface = styled.h1`
  display: inline-block;
  margin-left: 8px;
  color: ${props => props.theme.navy};
  font-size: 24px;
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -1px;
  vertical-align: baseline;
`;
