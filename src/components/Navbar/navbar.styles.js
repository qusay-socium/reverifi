import styled from 'styled-components';
import mq from 'styles/media-query';
import colors from 'styles/colors';
import { Menu } from 'react-feather';
import { ReactComponent as RawLogo } from 'assets/logo.svg';
import { ReactComponent as RawNotificationBell } from 'assets/images/notificationBell.svg';

export const BroadNavContainer = styled.div`
  align-items: center;
  background-color: ${colors.mineShaft};
  color: ${colors.white};
  display: flex;
  font-size: 0.875rem;
  height: 5rem;
  justify-content: center;
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
  z-index: 1;

  ${mq.tablet`
    align-items: stretch;
    justify-content: start;
  `}
`;

export const NarrowNavContainer = styled(BroadNavContainer)`
  ${mq.tablet`
    height: 4.375rem;
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

  ${mq.desktopWide`
    align-items: center;
    display: flex;
    gap: 1.0625rem;
    justify-content: start;
    text-align: center;
    width: fit-content;

    span {
      cursor: pointer;
      font-weight: 400;
    }
  `}
`;

export const UserNavRegContainer = styled.div`
  display: none;

  ${mq.tablet`
    align-items: center;
    display: flex;
    gap: 1.5rem;
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

export const UserMenuItemsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  padding: 0.9375rem 0rem;
  width: 12.5rem;
`;

export const MenuIcon = styled(Menu)`
  color: white;
  height: 2.125rem;
  left: 1.25rem;
  position: absolute;
  width: 3rem;

  ${mq.tablet`
    display: none
  `}
`;

export const NavControlSection = styled.div`
  align-items: center;
  border-left: 0.0625rem solid;
  display: flex;
  font-weight: 600;
  gap: 0.2rem;
  max-width: 20rem;
  padding: 0 1.4375rem;
`;

export const UserControlSectionWrapper = styled(NavControlSection)`
  cursor: pointer;
  position: relative;
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

export const TransparentButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  font-family: Montserrat;
  font-weight: 600;
`;

export const NotificationBell = styled(RawNotificationBell)`
  cursor: pointer;
`;

export const StyledInputGroup = styled.div`
  align-items: center;
  border-radius: 2.1875rem;
  box-shadow: 0rem 0.0625rem 0.1875rem ${colors.mineShaftShadow};
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
  outline: none;

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
