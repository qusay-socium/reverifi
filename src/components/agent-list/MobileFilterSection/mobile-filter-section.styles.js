import { FilterSection } from 'components/agent-list/AgentsListBanner/agents-list-banner.styles';
import styled from 'styled-components';
import mq from 'styles/media-query';

export const FilterSectionMobile = styled(FilterSection)`
  ${mq.tablet`
    display: none;
  `}
`;
