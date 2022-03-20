import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const TableWrapper = styled.div`
  box-shadow: 0 0.06rem 0.57rem ${colors.mercury};
  margin: 2rem 0;
  min-width: 100%;
  position: relative;
  z-index: 1;
  border-radius: 0.37rem;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  table-layout: ${({ fixedLayout }) => fixedLayout && 'fixed'};
  width: 100%;

  > * {
    tr:last-child {
      border: none;
    }
  }
`;

export const TableRow = styled.tr`
  border-bottom: 0.06rem solid ${colors.mercury};
  padding: 0.5rem;
  position: relative;
  text-align: left;

  display: ${({ show }) => show && 'none'};

  th:first-child {
    border-top-left-radius: 0.37rem;
  }

  th:last-child {
    border-top-right-radius: 0.37rem;
  }
`;

export const TableCell = styled.td`
  font-size: 0.8rem;
  padding: 1.7rem 0.6rem;
  white-space: ${({ wordBreak }) => (wordBreak ? 'normal' : 'nowrap')};
  line-height: 0.9rem;
  position: relative;

  ${({ iconsCell }) => iconsCell && 'text-align: right;'};
  ${({ centerAlign }) => centerAlign && 'text-align: center;'};

  ${mq.tablet`
    padding: 1rem ;
  `};
`;

export const TableHead = styled.th`
  background-color: ${colors.mercury};
  color: ${colors.dustyGray};
  font-size: 0.75rem;
  font-weight: bold;
  padding: 1.5rem;
  padding-left: 1rem;
`;

export const TableCellStatus = styled(TableCell)`
  text-align: right;
`;

export const IconContainer = styled.button.attrs(() => ({
  type: 'button',
}))`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 0.3rem;
  padding: ${({ hover }) => (hover ? '0.35rem' : 0)};
  position: relative;

  &:hover {
    background: ${({ hover }) => hover && colors.mercury};
    border-radius: ${({ hover }) => hover && '50%'};
  }

  &:hover {
    > span {
      display: block;
    }
  }
`;
