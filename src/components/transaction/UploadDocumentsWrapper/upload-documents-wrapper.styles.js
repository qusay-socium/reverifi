import styled from 'styled-components';
import colors from 'styles/colors';

export const SectionContainer = styled.div`
  margin: 2.5rem;
`;

export const UploadContainer = styled.div`
  background-color: ${colors.wildSand};
  padding: 2rem 3rem;
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  height: 15rem;

  > div {
    flex: 1;
  }
`;
