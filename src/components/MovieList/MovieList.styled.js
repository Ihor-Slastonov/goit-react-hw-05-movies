import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
`;

export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;

export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
