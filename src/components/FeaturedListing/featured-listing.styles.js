import styled from 'styled-components';
import colors from 'styles/colors';

export const FeatuedListingSectionContainer = styled.div`
  /*   background-color: red;
 */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 32rem;
  text-align: center;
  height: fit-content;
  & h2 {
    color: ${colors.textBlack};
    margin-top: 2rem;
  }
`;

export const ListingContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow: auto;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 7.5625rem;
  margin-right: 7.5625rem;
  max-width: 100%;
  grid-gap: 1.9375rem;
  width: fit-content;
  justify-content: center;
  padding: 0;
  /*   background-color: purple;
 */
`;
export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
