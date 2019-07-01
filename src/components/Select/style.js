import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 8px;
  vertical-align: baseline;
  background-color: #4629d3;
  cursor: pointer;

  &:hover {
    background-color: #295cd3;
  }

  &:after {
    z-index: 1;
    content: "";
    position: absolute;
    top: 50%;
    right: 8px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 7px solid rgba(255, 255, 255, 0.5);
    pointer-events: none;
    transform: translateY(-50%);
  }
`;

export const Selector = styled.select`
  display: block;
  font-size: 16px;
  font-weight: 500;
  font-family: Mabry;
  color: white;
  line-height: 1;
  padding: 10px 0;
  padding-left: 12px;
  padding-right: 28px;
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
