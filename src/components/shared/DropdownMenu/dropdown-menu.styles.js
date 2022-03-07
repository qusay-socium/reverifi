import whiteArrow from 'assets/icons/arrow-down-white.svg';
import arrow from 'assets/icons/arrow-down.svg';
import { Error } from 'components/shared/FormInput/form-input.styles';
import styled from 'styled-components';
import colors from 'styles/colors';

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
  font-size: 0.9rem;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0 1rem;
  outline: ${({ error }) =>
    error ? `0.06rem solid ${colors.red}` : `0.06rem solid ${colors.midGray}`};
  border-radius: ${({ smallBorderRadius }) =>
    smallBorderRadius ? '0.45rem' : '1.9rem'};
  background-color: ${({ dark }) => (dark ? colors.mineShaft : colors.white)};
  background-image: url(${({ leftIcon }) => leftIcon && leftIcon});
  background-repeat: no-repeat;
  background-position-x: 1rem;
  background-position-y: ${({ small }) => (small ? '45%' : ' 1rem')};

  &:active {
    outline: 0.06rem solid ${colors.green};
  }
`;

export const StyledSelect = styled.select`
  border: none;
  background-color: transparent;
  padding: ${({ leftIcon }) =>
    leftIcon ? '1rem 1.7rem' : '1rem 1.7rem 1rem 0'};
  padding-top: ${({ small }) => small && '0.5rem'};
  padding-bottom: ${({ small }) => small && '0.5rem'};
  font-family: inherit;
  font-weight: ${({ dark }) => dark && 600};
  font-size: 0.87rem;
  color: ${({ dark }) => (dark ? colors.white : `${colors.gray}`)};
  width: 100%;
  min-width: 7rem;

  -webkit-appearance: none;
  appearance: none;
  background-image: url(${({ dark }) => (dark ? whiteArrow : arrow)});
  background-repeat: no-repeat;
  background-position-x: 99%;
  background-position-y: ${({ small }) => (small ? '0.7rem' : ' 1.1rem')};
  font-family: inherit;

  &:focus {
    outline: none;
  }

  option {
    color: ${colors.gray};
    padding: 5rem;
  }
`;

export const ErrorMessage = styled(Error)`
  margin: 0.3rem 0;
  height: 0.6rem;
`;

export const Placeholder = styled.option`
  display: none;
`;

export const RequiredStar = styled.span`
  color: ${colors.red};
`;
