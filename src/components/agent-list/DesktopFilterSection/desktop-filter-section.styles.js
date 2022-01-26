import styled from 'styled-components';
import mq from 'styles/media-query';
import { FilterSection } from '../AgentCardsContainer/agent-cards-container.styles';

export const FilterSectionDesktop = styled(FilterSection)`
  display: none;
  ${mq.tablet`
    display: flex;
  `}
`;
