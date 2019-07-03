import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${props => props.expand ? '100%' : 'auto'};
  position: relative;
  display: inline-block;
  margin-bottom: 4px;
  color: ${props => props.theme.purple};
  border: 1px solid ${props => props.theme.purple};
  border-radius: ${props => props.theme.radius};
  vertical-align: baseline;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.blue};
    border-color: ${props => props.theme.blue};

    &:after {
      border-top-color: ${props => props.theme.blue};
    }
  }

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

export const Select = styled.select`
  display: block;
  font-size: 16px;
  font-weight: 500;
  font-family: Mabry;
  color: inherit;
  line-height: 14px;
  padding: 12px;
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
