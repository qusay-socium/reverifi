import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 42rem;
  justify-content: flex-start;
  width: 50rem;
`;

export const SubmitOfferImage = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 0.4rem 0 0 0.4rem;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
`;

export const PriceContainer = styled.div`
  padding-left: 1rem;
`;

export const Price = styled.h3`
  margin: 0;
  color: ${colors.green};
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Location = styled.p`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.4rem;
  font-size: 0.9rem;
  color: ${colors.dustyGray};
`;

export const FormContainer = styled.form`
  background-color: ${colors.green}50;
  margin: 0;
  padding: 1rem;
  border-radius: 0.3rem;
  width: 100%;

  div:first-child {
    margin-bottom: 1rem;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;
