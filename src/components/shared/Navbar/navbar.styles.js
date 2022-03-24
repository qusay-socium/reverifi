import { ReactComponent as RawLogo } from 'assets/logo.svg';
import { Menu } from 'react-feather';
import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';
import X from 'react-feather/dist/icons/x';
import Button from '../Button';
import { MenuLink } from '../Sidebar/sidebar.styles';

export const BroadNavContainer = styled.div`
  align-items: center;
  background-color: ${colors.mineShaft};
  color: ${colors.white};
  display: flex;
  font-size: 0.875rem;
  height: 5rem;
  justify-content: center;

  ${mq.tablet`
    align-items: stretch;
    justify-content: start;
  `}
`;

export const NarrowNavContainer = styled(BroadNavContainer)`
  ${mq.tablet`
    height: 5rem;
  `}
`;

const fadeOut = keyframes`
  from {
    max-height: 0;
  }
  
  to {  
    max-height: 42rem;
  }
`;

const fadeIn = keyframes`
  from {
    max-height: 42rem;
  }
  
  to {
    max-height: 0;
  }
`;

export const Nav = styled.nav`
  position: sticky;
  z-index: 1000;
  top: 0;
`;

export const NavItemsContainer = styled.div`
  ${mq.tablet`
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: flex-end;
  `}

  ${mq.desktopWide`
    justify-content: space-between;
  `}
`;

export const NavLinksContainer = styled.div`
  display: none;
  font-size: 0.9rem;

  ${mq.desktopWide`
    align-items: center;
    display: flex;
    gap: 1.0625rem;
    justify-content: start;
    text-align: center;
    width: fit-content;
  `}
`;

export const NavLink = styled.a`
  font-weight: 600;
  color: ${colors.white};
  text-decoration: none;

  &:hover {
    color: ${colors.green};
    cursor: pointer;
  }
`;

export const UserNavRegContainer = styled.div`
  ${mq.tablet`
    align-items: center;
    display: flex;
    gap: 0.5rem;
    width: 15.625rem;
  `}
`;

export const UserNavControlContainer = styled.div`
  display: none;

  ${mq.tablet`
    display: flex;
    height: 100%;
  `}
`;

export const MenuIcon = styled(Menu)`
  color: white;
  height: 2rem;
  left: 1.25rem;
  position: absolute;
  width: 3rem;
  padding-right: 1rem;

  ${mq.tablet`
    display: none
  `}
`;

export const CloseMenuIcon = styled(X)`
  color: white;
  height: 2rem;
  left: 1.25rem;
  position: absolute;
  width: 3rem;
  padding-right: 1rem;

  ${mq.tablet`
    display: none
  `}
`;

export const NavControlSection = styled.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  gap: 0.2rem;
  max-width: 20rem;
  padding: 0 1.43rem;
`;

export const UserControlSectionWrapper = styled(NavControlSection)`
  cursor: pointer;
  gap: 0.7rem;

  span {
    max-width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
  }
`;

export const Logo = styled(RawLogo)`
  cursor: pointer;
  margin: 0 3rem 0 5rem;
  width: 6.25rem;

  ${mq.tablet`
    align-self: center;
    width: 7.5rem;
  `}
`;

export const SignInButton = styled(Button)`
  font-size: 0.9rem;
  font-weight: 600;

  ${mq.tablet`
  font-weight: 600;
  background-color: transparent;
  font-size: 0.9rem;
  font-weight: 600;
  `};
`;

export const SignUpButton = styled(Button)`
  ${mq.mobile`
    display: none;
  `};

  ${mq.mobileWide`
    display: none;
  `};

  ${mq.tablet`
    display: block;
    border: 0.06rem solid ${colors.green};
    font-size: 0.9rem;
    font-weight: 600;

    &:hover {
      background-color: ${colors.mineShaft};
      color: ${colors.green};
      border: 0.06rem solid ${colors.green};
    }
    font-weight: 600;
  `};
`;

export const StyledInputGroup = styled.div`
  align-items: center;
  border-radius: 2.1875rem;
  box-shadow: 0rem 0.06rem 0.18rem ${colors.mineShaft}29;
  display: flex;
  height: 100%;

  svg {
    width: 2rem;
    height: 1.3rem;
  }
`;

export const SearchIconContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${colors.white};
  flex: 1;
  font-size: 0.9rem;
  height: 2.5rem;
  outline: none;
  font-family: inherit;

  ::placeholder {
    font-size: 1rem;
    font-family: inherit;
  }

  ${mq.desktopMax`
    font-size: 1.2rem;
  `}
`;

export const UserImage = styled.img`
  border-radius: 50%;
  height: 3.2rem;
  width: 3.2rem;
  object-fit: cover;
`;

export const MenuWrapper = styled.div`
  background: ${colors.white};
  border-radius: 0.37rem;
  box-shadow: 0 0.06rem 0.3rem ${colors.midGray};
  color: ${colors.mineShaft};
  font-size: 0.87rem;
  line-height: 1.5;
  margin-top: 0.5rem;
  opacity: 1;
  width: 13rem;
`;

export const MenuTopWrapper = styled.div`
  padding: 0.5rem;

  svg {
    width: 1rem;
    height: 1.2rem;
    margin-right: 0.6rem;
  }
`;

export const PointsWrapper = styled.div`
  align-items: center;
  border-radius: 0rem;
  box-shadow: 0rem 0.0625rem 0.625rem 0.0625rem rgb(34 34 34 / 6%);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 0.625rem;

  div {
    padding-top: 0.25rem;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  span {
    color: ${colors.green};
  }
`;

export const MenuItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  margin: 0.5rem 0 1rem 0.5rem;

  &:hover {
    color: ${colors.green};
    svg path {
      ${({ filled }) => filled && `fill: ${colors.green};`}
      ${({ stroke }) => stroke && `stroke: ${colors.green};`}
    }
  }
`;

export const ExpandableContainer = styled.div`
  animation: ${({ isExpanded }) => (isExpanded ? fadeOut : fadeIn)} ease-in-out;

  animation-duration: 0.4s;
  max-height: ${({ isExpanded }) => (isExpanded ? '42rem' : '0')};
  overscroll-behavior: contain;
  width: 100%;
  background-color: ${colors.mineShaft};
  display: ${({ isExpanded }) => (isExpanded ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1rem;

  ${mq.tablet`
    display:none;
  `}
`;

export const ExpandableMenuItem = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 1rem;
  margin-top: ${({ padding }) => (padding ? '0.3rem' : '0.7rem')};
  justify-content: start;
  align-items: flex-start;

  a {
    font-weight: 600;
    color: ${colors.white};
    text-decoration: none;
  }

  h4 {
    color: white;
    margin-top: 0.15rem;
    font-weight: 600;
  }
`;

export const ExpandableMenuLink = styled(MenuLink)`
  padding: 0;
  margin-left: 2rem;
`;

export const Container = styled.div`
  padding: 0;
  margin-left: 2rem;
`;
