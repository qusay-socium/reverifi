import styled from 'styled-components';
import colors from 'styles/colors';

export const NoOptionsMessage = styled.div`
  color: ${colors.azure};
  font-size: 0.9rem;
  cursor: pointer;
  text-align: left;
  font-weight: 600;
  width: 100%;
  height: 100%;

  :hover {
    text-decoration: underline;
  }
`;
