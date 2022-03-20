import { ReactComponent as summaryIco } from 'assets/icons/transaction-summary.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';

export const SummaryIcon = styled(summaryIco)`
  &:hover {
    + span {
      display: block;
    }
  }
`;

export const StepLink = styled(Link)`
  color: ${colors.cornflowerBlue};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
