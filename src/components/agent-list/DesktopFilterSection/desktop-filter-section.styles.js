import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const FilterSection = styled.div`
  border-radius: 1.75rem;
  box-shadow: 0 0.0625rem 0.3125rem ${colors.midGrey};
  color: ${colors.gray};
  display: none;
  justify-content: space-between;
  margin: 0.125rem 0.3125rem;
  padding: 0.3125rem;

  ${mq.tablet`
    display: flex;
  `}
`;
