import styled from 'styled-components';
import colors from 'styles/colors';

export const CardsContainer = styled.div`
  max-height: 40rem;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 3rem;
`;

export const ListingSearchText = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const Message = styled(ListingSearchText)`
  text-align: center;
  color: ${colors.dustyGray};
`;

export const SuggestedListing = styled.h4`
  margin-left: 2rem;
`;

export const ResultCountContainer = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const ResultNumber = styled(ListingSearchText)`
  padding-right: 0.5rem;
`;

export const ResultText = styled(ListingSearchText)`
  color: ${colors.dustyGray};
`;
