import styled from 'styled-components';
import mq from 'styles/media-query';

export const StyledSlide = styled.div`
  max-height: 25rem;

  ${mq.mobile`
    width: 21.25rem;
  `}

  ${mq.mobileWide`
    width: 21.25rem;
  `}

   ${mq.tablet`
    width: 21.25rem;
  `}

  ${mq.tabletWide`
    width: 42.5rem;
  `}

   ${mq.desktop`
    width: 42.5rem;
  `}

  ${mq.desktopWide`
    width: 63.75rem;
  `}

 ${mq.desktopMax`
    width: 63.75rem;
  `}

  ${mq.desktop1440p`
    width: 85rem;
  `}

  ${mq.desktopExtraWide`
    min-width: 100;
  `}


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
