import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const SectionContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

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

  ${mq.mobile`
    font-size: 22px;
  `}
`;

export const FilterButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: fit-content;
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
