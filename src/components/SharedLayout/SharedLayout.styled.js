import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  outline: 1px solid tomato;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  margin-bottom: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.6);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: orangered;
  }
`;
