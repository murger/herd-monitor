import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
	padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.offwhite};
  }

  span {
    padding: 2px 0;
    padding-right: 8px;
    box-sizing: border-box;
  }
`;

export const Id = styled.span`
  flex-basis: 72px;
  color: ${props => props.theme.offblack};
  border-radius: 4px;

  @media (max-width: 768px) {
    flex-basis: 25%;
  }
`;

export const Date = styled.span`
  flex-basis: 98px;
  color: ${props => props.theme.darkgray};

  @media (max-width: 768px) {
    flex-basis: 75%;
  }
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

  color: ${props => props.theme.darkgray};
  background-color: ${props => props.theme.offwhite};
  border-radius: 4px;

  ${Item}:hover & {
    color: white;
    background-color: ${props => props.theme.getStatusColour(props.type)};
  }
`;
