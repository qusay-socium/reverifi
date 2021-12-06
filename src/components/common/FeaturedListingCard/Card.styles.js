import colors from 'styles/colors';
import styled from 'styled-components';

export const ListingCard = styled.div`
  /*   background-color: yellow;
 */
  position: relative;
  margin: 0;
  width: 23.625rem;
  height: 20.75rem;
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
  z-index: 1;
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
  position: relative;
`;
export const Avatar = styled.img`
  height: 2.1875rem;
  width: 2.1875rem;
  border-radius: 50%;
  right: 3%;
  top: 75%;
  position: absolute;
`;

export const ListingCardImage = styled.img`
  min-width: 100%;
  max-height: 100%;
  max-width: 100%;
`;

export const ListingCardBody = styled.div`
  /*   background-color: blue;
 */
  color: ${colors.textBlack};
  padding-left: 0.5rem;
  margin-top: 0.5rem;

  & h4 {
    margin: 0;
  }
  & h3 {
    margin: 0;
    font-size: 1.125rem;
  }
  & p {
    margin: 0;
  }
`;

export const ListingTitleDistance = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListingCardFooter = styled.div`
  border-top: 2px solid ${colors.gray};
  /*   background-color: green;
 */
  margin: 0rem 0.5rem 0rem 0.5rem;
  text-align: center;
  padding: 0.3rem 0rem 0.3rem 0rem;
  display: flex;
  justify-content: space-between;
  & p {
    margin: 0;
  }
`;
export const ButtonContainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  & svg {
    margin: 0;
  }
`;
