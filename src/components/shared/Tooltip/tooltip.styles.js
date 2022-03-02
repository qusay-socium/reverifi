import styled, { css } from 'styled-components';
import colors from 'styles/colors';

const arrowPositions = {
  bottom: css`
    border-color: ${({ light }) => (light ? colors.white : colors.mineShaft)}
      transparent transparent transparent;
    left: 50%;
    margin-left: -0.4375rem;
    top: 100%;
  `,

  left: css`
    border-color: transparent
      ${({ light }) => (light ? colors.white : colors.mineShaft)} transparent
      transparent;
    margin-top: -0.4375rem;
    right: 100%;
    top: 50%;
  `,

  right: css`
    border-color: transparent transparent transparent
      ${({ light }) => (light ? colors.white : colors.mineShaft)};
    left: 100%;
    margin-top: -0.4375rem;
    top: 50%;
  `,

  top: css`
    border-color: transparent transparent
      ${({ light }) => (light ? colors.white : colors.mineShaft)} transparent;
    bottom: 100%;
    left: 50%;
    margin-left: -0.4375rem;
  `,
};

export const TooltipText = styled.span`
  background-color: ${({ light }) => (light ? colors.white : colors.mineShaft)};
  border-radius: 0.62rem;
  color: ${({ light }) => (light ? colors.mineShaft : colors.white)};
  display: none;
  width: fit-content;
  padding: 0.5rem 0.7rem;
  position: absolute;
  text-align: center;
  z-index: 5;
  box-shadow: 0 0.06rem 0.3rem ${colors.gray};

  bottom: ${({ bottom }) => bottom && `${bottom}rem`};
  left: ${({ left }) => left && `${left}rem`};
  right: ${({ right }) => right && `${right}rem`};
  top: ${({ top }) => top && `${top}rem`};

  &::after {
    ${({ removeArrow }) =>
      !removeArrow &&
      `
        border-style: solid;
        border-width: 0.45rem;
        content: ' ';
        position: absolute;
        `}
    ${({ arrowPosition }) => arrowPositions[arrowPosition]}
  }
`;
