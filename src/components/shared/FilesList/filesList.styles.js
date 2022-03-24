import { ReactComponent as RowDeleteIcon } from 'assets/icons/delete-icon.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const SelectedItemsList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.75rem;
  height: 100%;
  overflow-y: auto;
  width: 100%;
`;

export const SelectedItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
`;

export const SelectedItemInnerSection = styled.div`
  align-items: center;
  display: flex;
  gap: 0.625rem;
  padding: 0 2rem;

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

  > img {
    width: 2.8rem;
    height: 2.8rem;
    object-fit: cover;
  }
`;

export const DeleteIcon = styled(RowDeleteIcon)`
  cursor: pointer;
  width: 1.25rem;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  padding: 0 2rem;
`;

export const NumOfImagesText = styled.span`
  font-size: 1.3rem;
`;

export const MaxLengthMessage = styled.span`
  font-size: 0.75rem;

  ${({ max }) =>
    max &&
    `
    color: ${colors.red}
    `}
`;
