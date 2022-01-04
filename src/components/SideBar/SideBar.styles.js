import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

const fadeIn = keyframes`
from {
    max-width: 15rem;
  }
  to {
    dipslay:flex;
    justify-content: start;
    max-width: 5rem;
    position:static;
    text-align: center;
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
  }} ease-in-out forwards;
  animation-duration: 0.4s;
  background-color: ${colors.mineShaft};
  height: calc(100vh - 4.375rem);
  max-width: 15rem;
  padding: 0 1rem;
  position: fixed;
  text-align: center;
  width: 100%;
  ${mq.tablet`
    position:static;
  `}
}
`;

export const MenuAnchor = styled(NavLink)`
  align-items: center;
  border-radius: 6px;
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

export const MenuButton = styled.button`
  background-color: inherit;
  padding: 0;
  border: none;
  outline: none;
`;

export const MenuItemInnerContainer = styled.div`
  padding: 1rem 0rem;
`;
