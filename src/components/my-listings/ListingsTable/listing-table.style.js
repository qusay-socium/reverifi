import { ReactComponent as ArrowLeftIcon } from 'assets/arrow-left.svg';
import { TableCell } from 'components/shared/Table/table-styles';
import styled from 'styled-components';
import colors from 'styles/colors';

export const ListingImageContainer = styled.div`
  height: 3rem;
  width: 6rem;
`;

export const CellContainer = styled(TableCell)`
  padding: 0.8rem 0 0.8rem 1.5rem;
  padding-right: ${({ iconsCell }) => (iconsCell ? '1rem' : 0)};
`;

export const ListingImage = styled.img`
  border-radius: 0.3rem;
  height: 100%;
  width: 100%;
`;

export const AgentContainer = styled.div`
  display: flex;
  position: relative;

  &:hover {
    span {
      display: block;
    }
  }
`;

export const AgentImage = styled.img`
  border-radius: 20rem;
  height: 2.1rem;
  width: 2.1rem;
  margin-top: 0.1rem;
`;

export const AgentName = styled.p`
  margin-left: 0.5rem;
`;

export const TableIconContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ hover }) => (hover ? '0.35rem' : 0)};
  position: relative;

  &:hover {
    background: ${({ hover }) => hover && colors.mercury};
    border-radius: ${({ hover }) => hover && '50%'};
  }

  svg {
    height: 1rem;
    width: 1rem;
    &:hover {
      + span {
        display: block;
      }
    }
  }
`;

export const Pagination = styled.div`
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

export const IconContainer = styled.div`
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

export const MaxListingNumber = styled(CurrentListing)`
  color: ${colors.dustyGray};
`;

export const AgentToolTip = styled.p`
  width: 100%;
  max-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: auto;

  &:hover {
    span {
      display: block;
    }
  }
`;
