import styled from 'styled-components';
import colors from 'styles/colors';

export const FeatuedListingSectionContainer = styled.div`
  /*   background-color: red;
 */
  height: 32rem;
  text-align: center;
  height: fit-content;
  & h2 {
    color: ${colors.titleBlack};
    margin-top: 2rem;
  }
`;

export const Title = styled.h3``;

export const ListingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 7rem;
  margin-right: 7rem;
  justify-items: center;
  /*   background-color: purple;
 */
`;

export const ListingCard = styled.div`
  /*   background-color: yellow;
 */
  position: relative;
  width: 25rem;
  height: 21rem;
  border-radius: 0.5rem;
  overflow: hidden;
  text-align: left;
`;

export const ListingProperties = styled.div`
  /*   background-color: lightgreen;
 */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
  position: absolute;
`;

export const Property = styled.p`
  margin: 1rem 0.5rem 0.1rem 0.5rem;
  padding: 0.1rem 1rem 0.1rem 1rem;
  color: white;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.condition === 'New' ? colors.red : colors.mainGreen};
`;

export const ListingCardHeader = styled.div`
  width: 100%;
  height: 55%;
`;

export const ListingCardImage = styled.img`
  min-width: 100%;
  max-height: 100%;
  max-width: 100%;
`;

export const ListingCardBody = styled.div`
  background-color: blue;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const ListingTitleDistance = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListingCardFooter = styled.div`
  border-top: 2px solid ${colors.gray};
  background-color: green;
`;
