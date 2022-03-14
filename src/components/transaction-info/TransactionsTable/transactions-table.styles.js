import { ReactComponent as summaryIco } from 'assets/icons/transaction-summary.svg';
import styled from 'styled-components';

export const SummaryIcon = styled(summaryIco)`
  &:hover {
    + span {
      display: block;
    }
  }
`;
