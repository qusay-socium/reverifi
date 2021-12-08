import styled from 'styled-components';

export const Container = styled.div`
  /*   background-color: green;
 */
  padding: 2rem 0rem 2rem 0rem;
  display: grid;
  grid-template-columns: 20rem;
  grid-auto-flow: column;
  overflow-x: scroll;
  padding: 0rem 0rem;
  align-items: center;
  justify-items: center;
  scrollbar-width: none;
  position: relative;
  -ms-overflow-style: none;
  /* for Internet Explorer, Edge */
  scrollbar-width: none;

  @media (min-width: 22.5rem) {
    // 360px mobile: '22.5rem',
    grid-template-columns: repeat(${(props) => props.columns}, 21.25rem);
    width: 21.25rem;
  }
  @media (min-width: 30rem) {
    // 480px mobileWide: '30rem',
    grid-template-columns: repeat(${(props) => props.columns}, 21.25rem);
    width: 21.25rem;
  }
  @media (min-width: 40.625rem) {
    // 650px tablet: '40.625rem',
    grid-template-columns: repeat(${(props) => props.columns}, 21.25rem);
    width: 21.25rem;
  }
  @media (min-width: 48rem) {
    // 768px tabletWide: '48rem',
    grid-template-columns: repeat(${(props) => props.columns}, 21.25rem);
    width: 42.5rem;
  }
  @media (min-width: 61.25rem) {
    // 980px desktop: '61.25rem',
    grid-template-columns: repeat(${(props) => props.columns}, 21.25rem);
    width: 42.5rem;
  }
  @media (min-width: 73.75rem) {
    // 1180px desktopWide: '73.75rem',
    grid-template-columns: repeat(${(props) => props.columns}, 21.25rem);
    width: 63.75rem;
  }
  @media (min-width: 75rem) {
    // 1200px desktopMax: '75rem',
    grid-template-columns: repeat(${(props) => props.columns}, 21.25rem);
    width: 63.75;
  }
  @media (min-width: 90rem) {
    // 1440px desktopMax: '90rem',
    grid-template-columns: repeat(${(props) => props.columns}, 21.25rem);
    width: 85rem;
  }

  @media (min-width: 100rem) {
    // 1600px desktopExtraWide: '100rem',
    grid-template-columns: repeat(${(props) => props.columns}, 21.25rem);
    min-width: 100;
  }
`;
export const GridContainer = styled.div`
  width: fit-content;
`;
