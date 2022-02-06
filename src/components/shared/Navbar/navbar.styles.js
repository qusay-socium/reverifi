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
  span {
    font-weight: bold;
  }

  span:hover {
    color: ${colors.green};
  }

  ${mq.desktopWide`
    align-items: center;
    display: flex;
    gap: 1.0625rem;
    justify-content: start;
    text-align: center;
    width: fit-content;

    span {
      cursor: pointer;
      font-weight: 500;
    }
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
  border-left: 0.06rem solid;
  display: flex;
  font-weight: 600;
  gap: 0.2rem;
  max-width: 20rem;
  padding: 0 1.43rem;
`;

export const UserControlSectionWrapper = styled(NavControlSection)`
  cursor: pointer;
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
  font-weight: 500;
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
  gap: 1rem;
  height: 100%;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${colors.white};
  flex: 1;
  font-size: 0.9rem;
  height: 2.5rem;

  ::placeholder {
    font-size: 0.9rem;
  }

  ${mq.desktopMax`
    font-size: 1.2rem;
    
    ::placeholder {
      font-size: 1.2rem;
    }
  `}
`;

export const MenuWrapper = styled.div`
  background: ${colors.white};
  border-radius: 0.375rem;
  box-shadow: rgb(0 0 0 / 0%) 0px 8px 10px, rgb(0 0 0 / 12%) 0px 3px 14px;
  color: ${colors.mineShaft};
  font-size: 0.875rem;
  line-height: 1.5;
  margin-top: 0.5rem;
  opacity: 1;
  width: 13rem;
`;

export const MenuTopWrapper = styled.div`
  padding: 0.5rem;
`;

export const EmailWrapper = styled.div`
  font-weight: bold;
  max-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MenuItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin: 0.5rem 0 0.5rem 0.5rem;
  font-weight: 600;

  &:hover {
    color: ${colors.green};
  }
`;

export const MenuLine = styled.div`
  background-color: ${colors.midGray};
  height: 0.1rem;
`;

export const LogoutWrapper = styled.button`
  align-items: center;
  align-items: center;
  background: none;
  border-radius: 0.25rem;
  border: 0rem;
  color: ${colors.liver};
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  height: 3rem;
  justify-content: flex-start;
  padding: 1rem;
  width: 100%;
  font-weight: 600;

  svg {
    margin-right: 0.5rem;
    width: 1rem;
  }

  :hover {
    background: ${colors.alabaster};
  }
`;
