import styled from 'styled-components';

export const StyledSlide = styled.div`
  max-height: 25rem;
  @media (min-width: 22.5rem) {
    // 360px mobile: '22.5rem',
    width: 21.25rem;
  }
  @media (min-width: 30rem) {
    // 480px mobileWide: '30rem',
    width: 21.25rem;
  }
  @media (min-width: 40.625rem) {
    // 650px tablet: '40.625rem',
    width: 21.25rem;
  }
  @media (min-width: 48rem) {
    // 768px tabletWide: '48rem',
    width: 42.5rem;
  }
  @media (min-width: 61.25rem) {
    // 980px desktop: '61.25rem',
    width: 42.5rem;
  }
  @media (min-width: 73.75rem) {
    // 1180px desktopWide: '73.75rem',
    width: 63.75rem;
  }
  @media (min-width: 75rem) {
    // 1200px desktopMax: '75rem',
    width: 63.75;
  }
  @media (min-width: 90rem) {
    // 1440px desktopMax: '90rem',
    width: 85rem;
  }

  @media (min-width: 100rem) {
    // 1600px desktopExtraWide: '100rem',
    min-width: 100;
  }

  // dots styles
  .slideDots {
    list-style-type: none;
    text-align: center;
    margin: 0;
    padding: 0;

    > li {
      display: inline;
      margin: 0 5px;
      > button {
        // to hide the content
        font-size: 0 !important;
        width: 12px;
        height: 12px;
        border: none;
        background-color: #d8d8d8;
        border-radius: 50%;
        padding: 0;
      }
    }
  }

  // arrow styles
  .slick-prev {
    left: 0 !important;
    z-index: 1;
    width: 32px !important;
    height: 32px !important ;
  }
  .slick-next {
    right: 0 !important;
    z-index: 1;
    width: 32px !important;
    height: 32px !important ;
  }
  .slick-list {
    grid-gap: 1.25rem;
    margin-left: 0;
  }
  .slick-slide > div {
    display: grid;
    place-items: center;
  }
`;
