import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

// TODO: move these values to shared place
const NAVAR_HEIGHT = '5rem';
const NAVAR_HEIGHT_NON_LOGGED_IN = '4.375rem';

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
  height: calc(100vh - ${NAVAR_HEIGHT});
  display: flex;
  flex-direction: column;
  max-width: 15rem;
  padding: 0 1rem;
  position: fixed;
  text-align: center;
  width: 100%;

  ${mq.tablet`
    height: calc(100vh - ${({ isLoggedIn }) =>
      isLoggedIn ? NAVAR_HEIGHT : NAVAR_HEIGHT_NON_LOGGED_IN});
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
  width: 100%;

  &.active {
    background-color: ${colors.green};
  }
`;

export const LinkTitle = styled.p`
  margin-left: 2rem;
  overflow: hidden;
`;

export const MenuItem = styled.span`
  background-color: inherit;
  padding: 0;
  border: none;
  outline: none;
`;

export const MenuIconContainer = styled.div`
  padding: 1rem 0rem;
  display: flex;

  > svg {
    margin: 0 auto 0 0.75rem;
  }
`;
