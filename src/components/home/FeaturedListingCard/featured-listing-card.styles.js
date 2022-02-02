import styled from 'styled-components';
import colors from 'styles/colors';

export const CardContainer = styled.div`
  background: ${colors.white};
  border-radius: 0.375rem;
  box-shadow: 0rem 0.0625rem 0.5625rem ${colors.mineShaft}29;
  cursor: pointer;
  margin: 2rem 1rem;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    box-shadow: ${colors.mineShaft};
    margin-top: 1rem;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const InfoContainer = styled(Container)`
  align-items: flex-start;
  flex-direction: column;
`;

export const BodyIconsContainer = styled(Container)`
  gap: 1rem;
`;

export const IconsContainer = styled(Container)`
  gap: 0.5rem;
`;

export const CardImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  height: 18rem;
  width: 100%;
`;

export const CardBody = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  min-height: 6rem;
  padding: 1rem;
`;

export const CardFooter = styled.div`
  align-items: center;
  border-top: 0.0625rem solid ${colors.midGray};
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
`;

export const TagContainer = styled.div`
  display: flex;
  left: 1rem;
  position: absolute;
  top: 1rem;
`;

export const Tag = styled.div`
  background-color: ${({ isNew }) => (isNew ? colors.orange : colors.green)};
  border-radius: 0.25rem;
  color: ${colors.white};
  font-size: 0.625rem;
  margin-right: 0.4375rem;
  padding: 0.3125rem 1.1875rem;
`;

export const PersonImg = styled.img`
  border-radius: 50%;
  bottom: 1rem;
  height: 2.5rem;
  position: absolute;
  right: 1rem;
  width: 2.5rem;
`;

export const TextLarge = styled.p`
  color: ${colors.mineShaft};
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0.1875rem 0;
`;

export const TextMedium = styled.p`
  color: ${colors.mineShaft};
  font-size: 1rem;
  margin: 0.1875rem 0 0.9375rem 0;
  line-height: 1.2rem;
  font-weight: 600;
`;

export const TextSmall = styled.p`
  color: ${colors.mineShaft}7f;
  font-size: 0.75rem;
  margin: 0.1875rem 0;
`;

export const ServiceQuantity = styled.span`
  color: ${colors.mineShaft}7f;
  font-size: 0.75rem;
  padding-right: 0.25rem;
`;

export const IconContainer = styled.div`
  align-items: center;
  background-color: ${colors.wildSand};
  border-radius: 50%;
  box-shadow: 0 0.0625rem 0.375rem ${colors.mineShaft}29;
  cursor: pointer;
  display: flex;
  height: 1.5625rem;
  justify-content: center;
  width: 1.5625rem;

  svg {
    margin-top: ${({ stroke }) => stroke && '0.0938rem'};
    margin-right: ${({ fill }) => fill && '0.0938rem'};
  }

  &:hover {
    background-color: ${colors.green};
    cursor: pointer;

    svg path {
      fill: ${({ fill }) => fill && colors.white};
      opacity: 1;
      stroke: ${({ stroke }) => stroke && colors.white};
    }
  }
`;
