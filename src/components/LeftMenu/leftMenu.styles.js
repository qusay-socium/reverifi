import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';

const fadeIn = keyframes`
from {
    max-width: 22rem;
  }
  to {
    display: flex;
    justify-content: flex-start;  
    max-width: 5rem;
    text-align: center;
  }
  `;

const fadeOut = keyframes`
  from {
    max-width: 5rem;
  }
  to {  
    max-width: 22rem;
  }
  `;

export const MenuItemsContainer = styled.div`
  animation: ${({ animationType }) => {
    if (animationType === 'fadeIn') return fadeIn;
    if (animationType === 'fadeOut') return fadeOut;
    return '';
  }} ease-in-out forwards;
  animation-duration: 0.5s;
  background-color: ${colors.mineShaft};
  border-radius: 1rem;
  max-width: 22rem;
  max-height: 40rem;
  padding: 1rem 0;
  text-align: center;
}
`;

export const MenuAnchor = styled(NavLink)`
  align-items: center;
  color: ${colors.white};
  display: flex;
  justify-content: start;
  padding: 0.5rem 2rem;
  text-decoration: none;
  width: 100%;
  &.active {
    background-color: ${colors.green};
  }
`;

export const LinkTitle = styled.p`
  margin-left: 2rem;
`;

export const MenuItemInnerContainer = styled.div`
  padding: 0.1rem 0 0.5rem 0.2rem;
`;

export const IconContainer = styled.span``;
