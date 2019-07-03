import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
	padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.offwhite};
  }
`;

export const Id = styled.span`
  padding: 2px 0;
  min-width: 72px;
  border-radius: 4px;
`;

export const Date = styled.span`
  padding: 2px 0;
  color: ${props => props.theme.gray};
  flex-grow: 1;
`;

export const Status = styled.span`
  padding: 2px 8px;
  color: ${props => props.theme.darkgray};
  background-color: ${props => props.theme.offwhite};
  border-radius: 4px;

  ${Item}:hover & {
    color: white;
    background-color: ${props => props.theme.getStatusColour(props.type)};
  }
`;
