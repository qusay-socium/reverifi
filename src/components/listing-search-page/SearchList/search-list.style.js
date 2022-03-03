import styled from 'styled-components';
import colors from 'styles/colors';

export const CardsContainer = styled.div`
  max-height: 40rem;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
  width: 75%;
`;

export const ListingSearchText = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const Message = styled(ListingSearchText)`
  text-align: center;
  margin: 0;
  font-size: 2rem;
`;

export const SuggestedListing = styled.h4`
  margin-left: 2rem;
`;

export const ResultCountContainer = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
`;

export const ResultNumber = styled(ListingSearchText)`
  padding-right: 0.5rem;
  font-size: 1.38rem;
  font-weight: 500;
  margin-bottom: 0;
`;

export const ResultText = styled(ListingSearchText)`
  color: ${colors.dustyGray};
  font-weight: 700;
  margin: 0.5rem 0 0 0;
`;

export const Container = styled.div`
  margin: 12rem auto 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
