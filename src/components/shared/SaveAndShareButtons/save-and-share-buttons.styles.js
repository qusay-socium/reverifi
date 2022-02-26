import { ReactComponent as Heart } from 'assets/icons/agent-heart.svg';
import { ReactComponent as Share } from 'assets/icons/agent-share.svg';
import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const ButtonsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  gap: ${({ small }) => (small ? '0.2rem' : '0.5rem')};
`;

export const RoundedButton = styled(Button)`
  background-color: ${colors.wildSand};
  border-radius: 50%;
  color: ${colors.dustyGray};
  height: ${({ small }) => (small ? '1.5rem' : '1.87rem')};
  margin: 0.12rem;
  padding: ${({ small }) => (small ? '0 0.23rem' : '0 0.37rem')};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colors.green};
    color: ${colors.white};
    svg path {
      stroke: ${colors.white};
    }
  }

  ${({ active }) =>
    active &&
    `
    background-color: ${colors.green};
    svg path {
      stroke: ${colors.white};
    }
  `}
`;

export const HeartIcon = styled(Heart)`
  width: ${({ small }) => (small ? '1rem' : '1.125rem')};
  height: ${({ small }) => (small ? '1.1rem' : '1.125rem')};
`;

export const ShareIcon = styled(Share)`
  width: 1rem;
  padding-right: 0.1rem;
`;
