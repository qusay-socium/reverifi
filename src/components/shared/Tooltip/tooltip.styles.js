import styled, { css } from 'styled-components';
import colors from 'styles/colors';

const arrowPositions = {
  bottom: css`
    border-color: ${colors.mineShaft} transparent transparent transparent;
    left: 50%;
    margin-left: -0.4375rem;
    top: 100%;
  `,

  left: css`
    border-color: transparent ${colors.mineShaft} transparent transparent;
    margin-top: -0.4375rem;
    right: 100%;
    top: 50%;
  `,

  right: css`
    border-color: transparent transparent transparent ${colors.mineShaft};
    left: 100%;
    margin-top: -0.4375rem;
    top: 50%;
  `,

  top: css`
    border-color: transparent transparent ${colors.mineShaft} transparent;
    bottom: 100%;
    left: 50%;
    margin-left: -0.4375rem;
  `,
};

export const TooltipText = styled.span`
  background-color: ${colors.mineShaft};
  border-radius: 0.625rem;
  color: ${colors.white};
  display: none;
  min-width: 7.5rem;
  padding: 0.5rem 0.625rem;
  position: absolute;
  text-align: center;
  z-index: 5;

  bottom: ${({ bottom }) => bottom && `${bottom}rem`};
  left: ${({ left }) => left && `${left}rem`};
  right: ${({ right }) => right && `${right}rem`};
  top: ${({ top }) => top && `${top}rem`};

  &::after {
    border-style: solid;
    border-width: 0.45rem;
    content: ' ';
    position: absolute;
    ${({ arrowPosition }) => arrowPositions[arrowPosition]}
  }
`;
