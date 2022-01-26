import styled from 'styled-components';
import mq from 'styles/media-query';
import { FilterSection } from '../AgentCardsContainer/agent-cards-container.styles';

export const FilterSectionMobile = styled(FilterSection)`
  ${mq.tablet`
    display: none;
  `}
`;
