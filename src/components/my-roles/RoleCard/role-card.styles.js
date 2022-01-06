import { ReactComponent as checkIcon } from 'assets/icons/check.svg';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Card = styled.div`
  border-radius: 0.625rem;
  border: 0.0625rem solid;
  color: ${({ isSelected }) =>
    isSelected ? `${colors.green}` : `${colors.dustyGrey}`};
  border-color: ${({ isSelected }) =>
    isSelected ? `${colors.green}` : `${colors.mercury}`};
  cursor: pointer;
  margin: 0.625rem;
  min-height: 9.375rem;
  padding: 1.5625rem;
  position: relative;

  ${mq.mobileWide`
    min-height: 12.5rem;
  `};

  ${mq.desktop`
     min-width: 25rem; 
  `};

  svg {
    fill: ${({ isSelected }) =>
      isSelected ? `${colors.green}` : `${colors.dustyGrey}`};
  }
`;

export const Rectangle = styled.div`
  background-color: ${({ isSelected }) =>
    isSelected ? `${colors.green}` : `${colors.white}`};
  border: ${({ isSelected }) =>
    isSelected ? `none` : `0.125rem solid ${colors.dustyGrey}`};
  color: ${colors.white};
  height: 1.25rem;
  position: absolute;
  right: 1.25rem;
  top: 0.9375rem;
  width: 1.25rem;
`;

export const IconContainer = styled.div`
  height: 3.125rem;
  width: 3.125rem;
`;

export const CheckIcon = styled(checkIcon)`
  height: 100%;
  width: 100%;
`;

export const RoleText = styled.p`
  font-weight: bold;
`;

export const Overview = styled.p`
  margin: 0;

  ${mq.desktop`
     max-width: 18.75rem; 
  `};
`;

export const Icon = (icon) => styled(icon)``;
