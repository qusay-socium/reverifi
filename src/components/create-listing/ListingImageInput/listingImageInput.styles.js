import styled from 'styled-components';
import { ReactComponent as RowUploadIcon } from 'assets/icons/upload-icon.svg';
import colors from 'styles/colors';

export const Container = styled.div`
  background-color: ${colors.alabaster};
  padding: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const ImageInputSection = styled.div`
  flex: 1;
  height: 13rem;
  min-width: 18.75rem;
`;

export const InputInterface = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 0.5rem;
  border: 0.1563rem dashed #b2d235;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  height: 100%;
  justify-content: center;

  > span {
    font-size: 1.125rem;
    font-weight: 600;
  }
`;
export const UploadIcon = styled(RowUploadIcon)`
  width: 4.6875rem;
`;
