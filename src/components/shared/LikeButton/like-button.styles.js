import like from 'assets/icons/agent-detailes-like.svg';
import emptyLike from 'assets/icons8-share.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const LikeButtonWrapper = styled.div`
  cursor: pointer;
  border-radius: 50%;
`;

export const LikeIcon = styled.div`
  background-color: ${colors.white};
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  background-image: url(${emptyLike});
  background-repeat: no-repeat;
  background-position: 0.4rem 0.42rem;
  background-size: 1rem;
  box-shadow: 0 0.06rem 0.25rem ${colors.midGray};

  :hover {
    filter: contrast(0.92);
  }

  ${({ active }) =>
    active &&
    `
    background-image: url(${like});
  `}
`;
