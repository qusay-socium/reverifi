import { ReactComponent as RawLogo } from 'assets/logo.svg';
import { Menu } from 'react-feather';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';
import Button from '../Button';

export const BroadNavContainer = styled.div`
  align-items: center;
  background-color: ${colors.mineShaft};
  color: ${colors.white};
  display: flex;
  font-size: 0.875rem;
  height: 5rem;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;

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

export const NavItemsContainer = styled.div`
  display: none;

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

  a {
    font-weight: 600;
    color: ${colors.white};
    text-decoration: none;
  }

  a:hover {
    color: ${colors.green};
  }

  ${mq.desktopWide`
    align-items: center;
    display: flex;
    gap: 1.0625rem;
    justify-content: start;
    text-align: center;
    width: fit-content;
  `}
`;

export const UserNavRegContainer = styled.div`
  display: none;

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
  margin: 0 2rem;
  width: 6.25rem;

  ${mq.tablet`
    align-self: center;
    width: 7.5rem;
  `}
`;

export const SignInButton = styled(Button)`
  background-color: transparent;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const SignUpButton = styled(Button)`
  border: 0.06rem solid ${colors.green};
  font-size: 0.9rem;
  font-weight: 600;

  &:hover {
    background-color: ${colors.mineShaft};
    color: ${colors.green};
    border: 0.06rem solid ${colors.green};
  }
  font-weight: 600;
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
    font-family: 'Montserrat', Helvetica, sans-serif;
  }

  ${mq.desktopMax`
    font-size: 1.2rem;
  `}
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
