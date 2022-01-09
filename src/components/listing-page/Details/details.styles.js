import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Container = styled.div`
  border-top: 0.0625rem solid ${colors.midGrey};
  border-bottom: 0.0625rem solid ${colors.midGrey};
  padding: 2.375rem 0.5rem;

  ${mq.desktop`
    margin: 2rem 6.5625rem 0;
  `};
`;

export const Title = styled.h2`
  margin: 0;
`;

export const Wrapper = styled.ul`
  list-style-type: none;
  padding: 1rem 0 0;

  ${mq.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-auto-flow: row;
    margin: 0;
    padding: 2.1875rem 0;
    row-gap: 2.1875rem;
  `};

  ${mq.desktop`
    grid-template-columns: 1fr 1fr 1fr;
  `};
`;

export const DetailsItem = styled.li`
  display: flex;
  margin: 0 3.125rem 1.5rem 0;

  ${mq.tablet`
    margin-bottom: 0
  `};
`;

export const Key = styled.span`
  color: ${colors.gray};
  margin-right: 3.125rem;
  min-width: 8.125rem;
`;

export const Value = styled.span`
  color: ${colors.mineShaft};
  font-weight: bold;
  min-width: fit-content;
`;
