import { ReactComponent as FilterIcon } from 'assets/filter-button.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';
import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 2rem 4rem 0 4rem;
  width: 100%;
`;

export const HeaderTitle = styled.h2`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const CreateNewListingButton = styled(Button)`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg {
    margin-right: 0.7rem;

    path {
      fill: ${colors.mercury};
    }
  }
`;

export const FilterButton = styled(Button)`
  align-items: center;
  background-color: ${colors.white};
  border: 0.12rem solid ${colors.mercury};
  color: ${colors.gray};
  display: flex;
  margin-right: 2rem;
`;

export const FilterIconContainer = styled(FilterIcon)`
  margin-right: 0.6rem;
`;

export const ArrowDownContainer = styled(ArrowDown)`
  margin-left: 0.6rem;
`;
