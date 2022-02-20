import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Container = styled.div`
  border-top: 0.06rem solid ${colors.midGray};
  padding: 2.5rem 0.5rem;

  ${mq.desktop`
    margin: 2rem 7rem 0;
  `};
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0 1rem;
  padding: 0;

  ${mq.desktop`
    margin: 0 0 1rem;
  `};
`;

export const Wrapper = styled.ul`
  list-style-type: none;
  padding: 1rem 0 0;

  ${mq.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-auto-flow: row;
    margin: 0;
    padding: 2rem 0;
    row-gap: 2rem;
  `};

  ${mq.desktop`
    grid-template-columns: 1fr 1fr 1fr;
  `};
`;

export const DetailsItem = styled.li`
  display: flex;
  margin: 0 3rem 1.5rem 0;

  ${mq.tablet`
    margin-bottom: 0
  `};
`;

export const Key = styled.span`
  color: ${colors.liver};
  margin-right: 3rem;
  min-width: 10rem;
`;

export const Value = styled.span`
  color: ${colors.mineShaft};
  font-weight: bold;
  min-width: fit-content;
`;
