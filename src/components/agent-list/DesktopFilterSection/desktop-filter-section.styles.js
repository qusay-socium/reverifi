import { FilterSection } from 'components/agent-list/AgentsListBanner/agents-list-banner.styles';
import styled from 'styled-components';
import mq from 'styles/media-query';

export const FilterSectionDesktop = styled(FilterSection)`
  display: none;
  ${mq.tablet`
    display: flex;
  `}
`;
