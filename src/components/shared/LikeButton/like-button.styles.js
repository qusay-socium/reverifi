import styled from 'styled-components';

export const LikeButtonWrapper = styled.div`
  cursor: pointer;
  border-radius: 50%;

  svg:first-child {
    display: none;
  }

  ${({ active }) =>
    active &&
    `
    svg {
        display: none;
    }
    svg:first-child {
        display: inline;
    }
    `}

  :hover {
    svg {
      filter: contrast(0.92);
    }
  }
`;
