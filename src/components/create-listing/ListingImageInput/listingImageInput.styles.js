import { ReactComponent as RowUploadIcon } from 'assets/icons/upload-icon.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  background-color: ${colors.alabaster};
  padding: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ImageInputSection = styled.div`
  flex: 1;
  height: 13rem;
`;

export const InputInterface = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 0.5rem;
  border: 0.15rem dashed ${colors.green};
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  height: 100%;
  justify-content: center;
  min-width: 100%;

  > span {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const UploadIcon = styled(RowUploadIcon)`
  width: 4.6875rem;
`;
