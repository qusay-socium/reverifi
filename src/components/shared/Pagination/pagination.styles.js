import { ReactComponent as ArrowLeftIcon } from 'assets/arrow-left.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    width: 2rem;
    cursor: pointer;

    path {
      stroke: ${colors.gray};
    }
  }
`;

export const CurrentListing = styled.h5`
  margin-right: 0.3rem;
`;

export const MaxListingNumber = styled(CurrentListing)`
  color: ${colors.dustyGray};
`;

export const IconWrapper = styled.div`
  border-radius: 10rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 0.3rem;

  &:hover {
    background-color: ${colors.mercury};
  }
`;

export const ArrowLeft = styled(ArrowLeftIcon)`
  path {
    stroke: ${colors.mineShaft};
  }
`;

export const ArrowRight = styled(ArrowLeft)`
  transform: rotate(180deg);
`;
