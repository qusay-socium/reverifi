import styled from 'styled-components';
import colors from 'styles/colors';

export const ListingImageContainer = styled.div`
  height: 3rem;
  width: 6rem;
`;

export const ListingImage = styled.img`
  border-radius: 0.3rem;
  height: 100%;
  width: 100%;
`;

export const AgentContainer = styled.div`
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
`;

export const AgentImage = styled.img`
  border-radius: 20rem;
  height: 100%;
  width: 100%;
`;

export const AgentName = styled.p`
  height: 100%;
  margin-left: 0.8rem;
  width: 100%;
`;

export const IconContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 0.3rem;
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

export const MaxListingNumber = styled(CurrentListing)`
  color: ${colors.dustyGray};
`;
