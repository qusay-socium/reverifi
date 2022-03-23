import styled from 'styled-components';
import colors from 'styles/colors';

export const Overlay = styled.div`
  align-items: center;
  background-color: ${({ transparent }) =>
    transparent ? 'transparent' : `${colors.mineShaft}4d`};
  bottom: 0;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

export const Dialog = styled.div`
  background-color: ${colors.white};
  border-radius: 0.5rem;
  margin: 0 1.5rem;
  min-height: 6.25rem;
  min-width: 6.25rem;
  position: relative;
  max-height: 70%;
  overflow-y: auto;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0.93rem;
  top: 0.93rem;

  display: ${({ showCloseIcon }) => (!showCloseIcon ? 'flex' : 'none')};
`;
