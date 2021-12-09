import styled from 'styled-components';
import colors from 'styles/colors';

export const Title = styled.h3``;

export const EventsSection = styled.div`
  /*   background-color: red;
 */
  display: flex;
  position: relative;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  font-family: Montserrat;
  margin: 2rem 0rem;
`;
export const SectionTitle = styled.h1`
  color: ${colors.textBlack};
  font-size: 2rem;
  @media (max-width: 22.5rem) {
    // 360px mobile: '22.5rem',
    font-size: 22px;
  }
`;
export const FilterButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const FilterButton = styled.button`
  font-size: 1rem;
  margin: 0.5rem;
  color: ${(props) =>
    props.active === true ? colors.textGray : colors.mainGreen};

  text-decoration: ${(props) => (props.active === true ? 'none' : 'underline')};
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
  line-height: 2rem;
`;
