import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

// TODO: move these values to shared place
const NAVAR_HEIGHT = '5rem';

const fadeIn = keyframes`
  from {
    max-width: 15rem;
  }
  
  to {
    max-width: 5rem;
    position: static;
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
  background-color: ${colors.mineShaft};
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${NAVAR_HEIGHT});
  margin-top: 0.1rem;
  max-width: 15rem;
  padding: 6rem 0 0 1rem;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 1;

  ${mq.tablet`
    height: auto;
    position: static;
  `}
`;

export const MenuLink = styled(NavLink)`
  align-items: center;
  border-radius: 0.375rem;
  color: ${colors.white};
  display: flex;
  font-weight: 500;
  height: 3.063rem;
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

export const MenuItem = styled.span`
  cursor: pointer;
  background-color: inherit;
  padding: 0;
  border: none;
`;

const fadeInButton = keyframes`
  from {
    left: 12.7rem;
  }
  
  to {
    left: 2.8rem;
  }
`;

const fadeOutButton = keyframes`
  from {
    left: 2.8rem;
  }
  
  to {  
    left: 12.7rem;
  }
`;

export const MenuIconContainer = styled.div`
  animation: ${({ isCollapsed }) => {
      if (isCollapsed === true) return fadeOutButton;
      if (isCollapsed === false) return fadeInButton;
      return '';
    }}
    ease-in-out forwards;
  animation-duration: 0.4s;
  background-color: ${colors.white};
  border-radius: 20rem;
  box-shadow: 0 0.0625rem 0.3125rem ${colors.midGray};
  display: flex;
  left: 12.7rem;
  margin: 1rem;
  padding: 0.5rem;
  position: absolute;
  top: 6rem;
  transition: 0.2s;

  > svg {
    width: 1.4rem;
    height: 1.4rem;
    path {
      fill: ${colors.mineShaft};
    }
  }

  &:hover {
    background-color: ${colors.green};
    > svg {
      path {
        fill: ${colors.white};
      }
    }
  }
`;
