import styled from 'styled-components';
import colors from 'styles/colors';

export const ListingImageContainer = styled.div`
  height: 3.8rem;
  width: 6.3rem;
`;

export const ListingImage = styled.img`
  border-radius: 0.3rem;
  height: 100%;
  width: 100%;
`;

export const AgentInfoContainer = styled.div`
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
`;

export const AgentImage = styled.img`
  border-radius: 20rem;
  height: 100%;
  width: 2.3rem;
`;

export const AgentName = styled.p`
  height: 100%;
  margin-left: 0.8rem;
  margin-top: 0rem;
`;

export const IconContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 0.3rem;
  padding: ${({ hoverable }) => (hoverable ? '0.35rem' : 0)};
  position: relative;

  &:hover {
    background: ${({ hoverable }) => hoverable && colors.mercury};
    border-radius: ${({ hoverable }) => hoverable && '50%'};
  }

  svg {
    height: 1rem;
    width: 1rem;
  }

  &:hover {
    > span {
      display: block;
    }
  }
`;
