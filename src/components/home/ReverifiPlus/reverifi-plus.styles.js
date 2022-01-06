import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  margin: 0 auto;
  padding: 2.25rem 1.37rem;

  ${mq.tablet`
    flex-direction: row;
    justify-content: space-between;
  `}

  ${mq.desktop`
    margin: 0 6.25rem;
  `}
`;

export const FirstSection = styled.div`
  max-width: 34.12rem;
`;

export const Header = styled.h3`
  font-size: 1.375rem;
  margin: 0 0 1.1rem 0;

  span {
    color: ${colors.green};
  }

  ${mq.tablet`
    font-size: 2rem;
  `}
`;

export const Paragraph = styled.p`
  color: ${colors.mineShaft};
  font-size: 1rem;
  margin: 0 0 0.94rem 0;
  opacity: 0.5;

  ${mq.tablet`
    font-size: 1.1rem;
  `}
`;

export const MoreButton = styled(Button)`
  border-radius: 1.25rem;
  font-size: 1rem;
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
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ItemIcon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ItemHeader = styled.h4`
  font-size: 0.87rem;
  font-weight: 400;
  margin: 0.63rem 0 0 0;

  ${mq.tablet`
    font-size: 1.1rem;
  `}
`;
