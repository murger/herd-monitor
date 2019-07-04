import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
	padding: 8px;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => (props.active) && props.theme.offwhite};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.whiteish};
  }

  span {
    padding: 2px 0;
    padding-right: 8px;
    box-sizing: border-box;
    background-color: inherit;

    @media (max-width: 480px) {
      flex-basis: 100%;
    }
  }
`;

export const Id = styled.span`
  flex-basis: 80px;
  color: ${props => props.theme.offblack};
`;

export const Date = styled.span`
  flex-basis: 140px;
  color: ${props => props.theme.darkgray};
`;

export const Price = styled.span`
  flex-grow: 1;
  color: ${props => props.theme.gray};

  del {
    padding-left: 8px;
    color: ${props => props.theme.lightgray};
  }
`;

export const Status = styled.span`
  && {
    padding-left: 8px;
    padding-right: 8px;
  }

  color: ${props => props.theme.offblack};
  border-radius: ${props => props.theme.radius};

  @media (max-width: 480px) {
    position: absolute;
    top: 8px;
  }

  ${Item}:hover & {
    color: white;
    background-color: ${props => props.theme.getStatusColour(props.type)};
  }
`;
