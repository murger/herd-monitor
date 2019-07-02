import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 4px;
  border: 1px solid ${props => props.theme.purple};
  border-radius: 4px;
  vertical-align: baseline;
  cursor: pointer;

  &:after {
    z-index: 1;
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 7px solid ${props => props.theme.purple};
    pointer-events: none;
    transform: translateY(-50%);
  }
`;

export const Selector = styled.select`
  display: block;
  font-size: 16px;
  font-weight: 500;
  font-family: Mabry;
  color: ${props => props.theme.purple};
  line-height: 14px;
  padding: 10px;
  padding-right: 32px;
  width: 100%;
  box-sizing: border-box;
  margin: 0px;
  border: 0px;
  border-radius: 0px;
  appearance: none;
  background-color: transparent;
  outline: none;

  &::-ms-expand {
    display: none;
  }

  option {
    font-weight: normal;
  }
`;
