import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const TableWrapper = styled.div`
  border-radius: 0.375rem;
  box-shadow: 0 0.0625rem 0.5625rem ${colors.mercury};
  margin: 2rem 0;
  overflow: hidden;
  width: 100%;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableRow = styled.tr`
  border: 0.0625rem solid ${colors.mercury};
  padding: 0.5rem;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 1.7rem 0.625rem;

  ${mq.tablet`
    padding: 1.7rem;
  `}
`;

export const TableHead = styled.th`
  background-color: ${colors.mercury};
  color: ${colors.dustyGrey};
  padding: 1.7rem;
`;

export const IconContainer = styled.button`
  background: none;
  border: 0.05rem solid ${colors.white};
  cursor: pointer;

  :hover {
    border-color: ${colors.green};
  }
`;
