import { ReactComponent as checkIcon } from 'assets/icons/check.svg';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Card = styled.div`
  border-radius: 0.625rem;
  border: 0.0625rem solid;
  color: ${({ isSelected }) =>
    isSelected ? `${colors.green}` : `${colors.dustyGray}`};
  border-color: ${({ isSelected }) =>
    isSelected ? `${colors.green}` : `${colors.mercury}`};
  cursor: pointer;
  margin: 0.625rem;
  min-height: 9.375rem;
  padding: 1.5rem;
  position: relative;

  svg {
    fill: ${({ isSelected }) =>
      isSelected ? `${colors.green}` : `${colors.dustyGray}`};
  }

  :hover {
    border-color: ${colors.green};
  }
`;

export const Rectangle = styled.div`
  background-color: ${({ isSelected }) =>
    isSelected ? `${colors.green}` : `${colors.white}`};
  border: ${({ isSelected }) =>
    isSelected ? `none` : `0.125rem solid ${colors.dustyGray}`};
  color: ${colors.white};
  height: 1.25rem;
  position: absolute;
  right: 1.25rem;
  top: 1.5rem;
  width: 1.25rem;
`;

export const CheckIcon = styled(checkIcon)`
  height: 100%;
  width: 100%;
`;

export const Overview = styled.p`
  ${mq.desktop`
     max-width: 20rem; 
  `};
`;

export const Icon = (icon) => styled(icon)``;
