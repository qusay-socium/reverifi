import styled from 'styled-components';
import { ReactComponent as RowDeleteIcon } from 'assets/icons/delete-icon.svg';

export const SelectedItemsList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.75rem;
  height: 100%;
  overflow-y: auto;
  width: 100%;

  > span {
    margin: 0 auto;
    font-size: 1.5rem;
  }
`;

export const SelectedItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectedItemInnerSection = styled.div`
  align-items: center;
  display: flex;
  gap: 0.625rem;

  > span {
    font-size: 0.75rem;
  }
`;

export const ThumbnailWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 2.625rem;
  min-width: 2.625rem;
  width: 2.625rem;
`;

export const DeleteIcon = styled(RowDeleteIcon)`
  cursor: pointer;
  width: 1.25rem;
`;
