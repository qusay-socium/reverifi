import styled from 'styled-components';

export const OverLay = styled.div`
  bottom: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

export const StyledMenu = styled.div`
  cursor: initial;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  padding: 0 0.5rem;
  position: absolute;
  right: calc(100vw - ${({ right }) => right}px);
  top: ${({ top }) => top}px;
  transform-origin: top;
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transition: opacity 125ms, transform 125ms;
  z-index: 100;
`;
