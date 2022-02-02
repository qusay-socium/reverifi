import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 3.25rem 1.37rem;
  align-items: center;

  ${mq.tablet`
    flex-direction: row;
    justify-content: space-between;
  `}

  ${mq.desktop`
    margin: 0 6.25rem;
  `}
`;

export const FirstSection = styled.div`
  max-width: 34rem;
`;

export const Header = styled.h3`
  font-size: 1.3rem;
  margin: 1rem 0 1rem 0;

  span {
    color: ${colors.green};
  }

  ${mq.tablet`
    font-size: 2.4rem;
  `}
`;

export const Paragraph = styled.p`
  color: ${colors.mineShaft};
  font-size: 1rem;
  margin: 2rem 0;
  opacity: 0.5;

  ${mq.tablet`
    font-size: 1.25rem;
  `}
`;

export const SeeMoreButton = styled(Button)`
  height: 3rem;
  border-radius: 1.75rem;
  font-size: 1.125rem;
`;

export const SecondSection = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(2, 1fr);

  ${mq.mobile`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${mq.tablet`
    gap: 1.75rem;
  `}
`;

export const Item = styled.div`
  align-items: center;
  border-radius: 0.4rem;
  border: 0.1rem solid ${colors.white};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  transition: 0.2s;

  &:hover {
    border-color: ${colors.green};
  }

  &:hover {
    h4 {
      color: ${colors.green};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${colors.green};
      }
      rect {
        fill: ${colors.green};
      }
    }
  }

  svg {
    width: 2.5rem;
    height: 2.75rem;
  }
`;

export const ItemIcon = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.1rem;
  justify-content: center;
  width: 2rem;

  svg {
    path {
      fill: ${colors.dustyGray};
    }
    rect {
      fill: ${colors.dustyGray};
    }
  }
`;

export const ItemHeader = styled.h4`
  font-size: 0.87rem;
  font-weight: 400;
  margin: 0.63rem 0 0 0;
  color: ${colors.gray};
  ${mq.tablet`
    font-size: 1.1rem;
  `};
`;
