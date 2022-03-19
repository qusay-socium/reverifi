import styled from 'styled-components';
import colors from 'styles/colors';

export const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
`;

export const Header = styled.h1`
  border-bottom: 0.125rem solid ${colors.alabaster};
  color: ${colors.darkGray};
  font-family: 'Montserrat';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.8125rem;
  margin: 0;
  padding: 2rem 2rem 2rem 3.875rem;
`;

export const UnderConstructionWrapper = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  padding: 8rem 4rem;

  h1 {
    color: ${colors.darkGray};
    font-family: 'Montserrat';
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4375rem;
    text-transform: capitalize;
  }
`;
