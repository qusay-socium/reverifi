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

export const Wrapper = styled.ul`
  list-style-type: none;
  padding: 1rem 0 0;

  ${mq.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;
    margin: 0;
    padding: 2.1875rem 0;
    row-gap: 2.1875rem;
  `};

  ${mq.desktop`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `};
`;

export const FeaturesItem = styled.li`
  display: flex;
  margin: 0 3.125rem 1.5rem 0;
  align-items: center;

  span {
    color: ${({ selected }) => (selected ? colors.green : colors.mineShaft)};
  }
  img {
    background-color: ${({ selected }) =>
      selected ? colors.green : colors.white};
    border-radius: 0.6rem;
    padding: 0.3rem;
    width: 2rem;
    height: 2rem;
  }

  ${mq.tablet`
    margin-bottom: 0
  `};
`;

export const Image = styled.img`
  height: 5rem;
  margin-right: 0.69rem;
  width: 5rem;
`;

export const Label = styled.span`
  color: ${colors.mineShaft};
  font-weight: 400;
`;
