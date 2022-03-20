import { ReactComponent as RowUploadIcon } from 'assets/icons/upload-icon.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  padding: 2rem 0;
`;

export const Label = styled.label`
  color: ${colors.matterhorn};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.5rem;
`;

export const ImageInputSection = styled.div`
  flex: 1;
  height: 8rem;
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

  span {
    font-size: 0.87rem;
    font-weight: 600;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const UploadIcon = styled(RowUploadIcon)`
  width: 4.6875rem;
`;
