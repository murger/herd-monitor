import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
	padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.offwhite};
  }

  span {
    padding: 2px 0;
  }
`;

export const Id = styled.span`
  min-width: 72px;
  color: ${props => props.theme.offblack};
  border-radius: 4px;
`;

export const Date = styled.span`
  min-width: 96px;
  color: ${props => props.theme.darkgray};
`;

export const Price = styled.span`
  color: ${props => props.theme.gray};
  flex-grow: 1;

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
