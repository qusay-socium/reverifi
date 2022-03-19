import styled from 'styled-components';
import colors from 'styles/colors';

export const SectionContainer = styled.div`
  margin: 2.5rem;
`;

export const UploadText = styled.span`
  color: ${colors.cornflowerBlue};
`;

export const UploadFileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  p {
    margin: 0 0.5rem 0 1rem;
  }
`;

export const LoadingImage = styled.img`
  width: 2rem;
  height: 2rem;
`;
