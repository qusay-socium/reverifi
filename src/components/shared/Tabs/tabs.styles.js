import styled from 'styled-components';
import colors from 'styles/colors';

export const Tab = styled.button`
  background: ${({ active }) => (active ? colors.green : 'none')};
  border-radius: 0.375rem 0.375rem 0 0;
  border: 0.0625rem solid ${colors.midGray};
  color: ${({ active }) => active && colors.white};
  cursor: pointer;
  font-size: 1.125rem;
  margin-right: 0.4rem;
  min-width: 9rem;
  border-bottom: none;
  font-family: inherit;
  padding: 0.7rem;

  svg {
    path {
      fill: ${({ active }) => active && colors.white};
    }
  }
`;

export const TabContent = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};

  > div {
    margin: 0;
  }
`;

export const LineSeparator = styled.hr`
  margin: 0;
  height: 2px;
  background-color: ${colors.mercury};
  border: none;
`;
