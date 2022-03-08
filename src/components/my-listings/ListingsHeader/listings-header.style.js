import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 2rem 4rem 0 4rem;
  width: 100%;
  align-self: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CreateNewListingButton = styled(Button)`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg {
    margin-right: 0.7rem;

    path {
      fill: ${colors.white};
    }
  }
`;

export const FilterButton = styled(Button)`
  align-items: center;
  background-color: ${colors.white};
  border: 0.12rem solid ${colors.mercury};
  color: ${colors.gray};
  display: flex;
  margin-right: 1rem;
`;
