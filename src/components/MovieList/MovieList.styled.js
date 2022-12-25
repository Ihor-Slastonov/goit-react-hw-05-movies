import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
`;

export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  transition: box-shadow 250ms ease-in-out, border 250ms ease-in-out,transform 250ms ease-in-out ;
  :hover{
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.6);
    border: 1px solid orangered;
    transform: scale(1.02)
  }

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
