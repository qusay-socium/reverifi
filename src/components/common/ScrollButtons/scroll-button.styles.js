import styled from 'styled-components';

export const ScrollButtonsContainer = styled.div`
  /*   background-color: purple;
 */
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0rem -2rem;
  position: absolute;
  top: 40%;
  width: 100%;
  z-index: 1;
  pointer-events: none;
  & svg {
    margin: 0;
    pointer-events: auto;
  }
`;
