import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const MainContainer = styled.div`
  padding: 1rem;

  ${mq.mobile`
    padding: 1rem 3.75rem;
  `}
`;

export const Title = styled.h3`
  user-select: none;
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);

  ${mq.mobile`
    grid-template-columns: repeat(auto-fit, minmax(15.62rem, 1fr));
  `}
`;

export const Feature = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0 1rem 0;
  position: relative;
  cursor: pointer;

  ${mq.mobile`
    margin: 0 0 2rem 0;
  `}
`;

export const FeatureTitle = styled.label`
  align-items: center;
  color: ${({ isActive }) => (isActive ? colors.green : colors.gray)};
  display: flex;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  background: ${({ isActive }) => (isActive ? colors.green : colors.white)};
  border-radius: 1rem;
  box-shadow: ${({ isActive }) =>
    isActive ? `0 0 0.62rem ${colors.green}` : `none`};
  display: flex;
  justify-content: center;
  margin-right: 0.25rem;
  min-height: 2rem;
  min-width: 2rem;

  img {
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  }
`;
