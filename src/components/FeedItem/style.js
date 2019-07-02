import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
	padding: 8px;
  border-radius: 4px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Id = styled.span`
  min-width: 72px;
  border-radius: 4px;
`;

export const Date = styled.span`
  color: #ccc;
`;
