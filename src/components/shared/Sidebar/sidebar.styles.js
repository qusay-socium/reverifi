import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';

const fadeIn = keyframes`
  from {
    max-width: 15rem;
  }
  
  to {
    max-width: 5rem;
  }
`;

const fadeOut = keyframes`
  from {
    max-width: 5rem;
  }
  
  to {  
    max-width: 15rem;
  }
`;

export const MenuItemsContainer = styled.div`
  animation: ${({ isCollapsed }) => {
      if (isCollapsed === true) return fadeOut;
      if (isCollapsed === false) return fadeIn;
      return '';
    }}
    ease-in-out forwards;

  animation-duration: 0.4s;
  display: flex;
  flex-direction: column;
  background-color: ${colors.mineShaft};
  margin-top: 0.1rem;
  padding: 5rem 0 0 1rem;
  position: sticky;
  z-index: 1;
  height: 94vh;
  margin-bottom: -30rem;
  max-width: 15rem;
`;

export const MenuLink = styled(NavLink)`
  align-items: center;
  border-radius: 0.375rem;
  color: ${colors.white};
  display: flex;
  font-weight: 500;
  height: 3rem;
  justify-content: start;
  padding: 0.5rem 0.8rem;
  text-decoration: none;
  white-space: nowrap;

  &.active {
    ${({ isCollapsed }) =>
      !isCollapsed && `border-right: 0.35rem ${colors.green} solid;`}
    ${({ isCollapsed }) => !isCollapsed && `border-radius: 0;`}
    ${({ isCollapsed }) => isCollapsed && `background-color: ${colors.green};`}
    ${({ isCollapsed }) => isCollapsed && `margin-right:1rem;`}
  }
`;

export const LinkTitle = styled.p`
  margin-left: 2rem;
  overflow: hidden;
`;

export const ItemsContainer = styled.p`
  margin-left: 2rem;
  overflow: hidden;
`;

export const MenuItem = styled.span`
  cursor: pointer;
  background-color: inherit;
  padding: 0;
  border: none;
  position: relative;
`;

export const MenuArrow = styled.span`
  cursor: pointer;
  padding: 0;
  border: none;
  position: relative;
`;

export const MenuIconContainer = styled.div`
  animation: ease-in-out forwards;

  animation-duration: 0.4s;
  background-color: ${colors.white};
  border-radius: 20rem;
  border: 0.1rem ${colors.midGray} solid;
  box-shadow: none;
  display: flex;
  padding: 0.5rem;
  position: absolute;
  top: -4rem;
  right: -1rem;

  > svg {
    width: 1rem;
    height: 1rem;

    path {
      fill: ${colors.mineShaft};
    }
  }

  &:hover {
    background-color: ${colors.green};
    border: 0.1rem ${colors.green} solid;

    > svg {
      path {
        fill: ${colors.white};
      }
    }
  }
`;
