import whiteArrow from 'assets/icons/arrow-down-white.svg';
import arrow from 'assets/icons/arrow-down.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  margin-bottom: 0.6rem;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 0 1rem;
  border: 0.0625rem solid ${colors.midGray};
  border-radius: ${({ smallBorderRadius }) =>
    smallBorderRadius ? '0.4375rem' : '1.875rem'};
  background-color: ${({ dark }) => (dark ? colors.mineShaft : colors.white)};

  background-image: url(${({ leftIcon }) => leftIcon && leftIcon});
  background-repeat: no-repeat;
  background-position-x: 0.9375rem;
  background-position-y: ${({ small }) => (small ? '0.5rem' : ' 1rem')};
`;

export const StyledSelect = styled.select`
  border: none;
  background-color: transparent;
  padding: ${({ leftIcon }) =>
    leftIcon ? '1rem 1.7rem' : '1rem 1.7rem 1rem 0'};
  padding-top: ${({ small }) => small && '0.5rem'};
  padding-bottom: ${({ small }) => small && '0.5rem'};
  color: ${({ dark }) => (dark ? colors.white : `${colors.mineShaft}95`)};
  font-weight: ${({ dark }) => dark && 600};
  font-size: 0.875rem;
  width: 100%;

  -webkit-appearance: none;
  appearance: none;
  background-image: url(${({ dark }) => (dark ? whiteArrow : arrow)});
  background-repeat: no-repeat;
  background-position-x: 99%;
  background-position-y: ${({ small }) => (small ? '0.6rem' : ' 1.1rem')};

  &:focus {
    outline: none;
  }

  option {
    color: ${colors.mineShaft}95;

    &:first-child {
      display: none;
    }
  }
`;
