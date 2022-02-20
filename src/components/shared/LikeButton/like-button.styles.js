import styled from 'styled-components';

export const LikeButtonWrapper = styled.div`
  cursor: pointer;

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
      display: none;
    }

    svg:first-child {
      display: inline;
    }
  }
`;
