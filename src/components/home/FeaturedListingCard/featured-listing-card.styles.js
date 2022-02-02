import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const CardContainer = styled.div`
  background: ${colors.white};
  border-radius: 0.37rem;
  box-shadow: 0rem 0.06rem 0.56rem ${colors.mineShaft}29;
  cursor: pointer;
  margin: 2rem 1rem;
  overflow: hidden;
  overflow: hidden;
  position: relative;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const OverlayContainer = styled.div`
  align-items: center;
  background-color: ${colors.mineShaft}99;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  opacity: 0;
  position: absolute;
  text-align: center;
  transition: 0.5s;
  width: 100%;
  z-index: 2;
  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

export const OverlayProperty = styled.h6`
  color: ${colors.midGray};
`;

export const OverlayAddress = styled.h4`
  color: ${colors.white};
`;

export const OverlayPrice = styled.h4`
  color: ${colors.green};
`;

export const OverlayFeatures = styled.div`
  display: flex;
  padding-bottom: 1rem;
  svg {
    margin-right: 1rem;
    path {
      fill: ${colors.white};
      circle {
        stroke: ${colors.white};
      }
    }
  }

  div {
    span {
      color: ${colors.white};
    }
  }
`;

export const OverlayButton = styled(Button)`
  color: ${colors.white};
`;

export const OverlayIcons = styled.div`
  bottom: 1rem;
  position: absolute;
  right: 1rem;
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
  overflow: hidden;
  height: 12rem;
  ${CardContainer}:hover & {
    height: 100%;
  }
`;

export const Image = styled.img`
  height: 12rem;
  width: 100%;
  transition: 0.2s;
  ${CardContainer}:hover & {
    height: 22rem;
  }
`;

export const CardBody = styled.div`
  position: relative;
  align-items: flex-start;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  min-height: 6rem;
  padding: 1rem;
  ${CardContainer}:hover & {
    display: none;
  }
`;

export const CardFooter = styled.div`
  align-items: center;
  border-top: 0.06rem solid ${colors.midGray};
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;

  ${CardContainer}:hover & {
    display: none;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  left: 1rem;
  position: absolute;
  top: 1rem;

  ${CardContainer}:hover & {
    top: 2rem;
  }
`;

export const Tag = styled.div`
  background-color: ${({ isNew }) => (isNew ? colors.orange : colors.green)};
  border-radius: 0.25rem;
  color: ${colors.white};
  font-size: 0.625rem;
  margin-right: 0.4375rem;
  padding: 0.3125rem 1.1875rem;
  transition: 0.5s;

  ${CardContainer}:hover & {
    opacity: 0;
  }
`;

export const PersonImg = styled.img`
  border-radius: 50%;
  bottom: 1rem;
  height: 2.5rem;
  position: absolute;
  right: 1rem;
  width: 2.5rem;

  ${CardContainer}:hover & {
    opacity: 0;
    bottom: 0;
  }
`;

export const TextLarge = styled.p`
  color: ${colors.mineShaft};
  font-size: 1.12rem;
  font-weight: 600;
  margin: 0.18rem 0;
`;

export const TextMedium = styled.p`
  color: ${colors.mineShaft};
  font-size: 1rem;
  margin: 0.2rem 0 0 0;
  line-height: 1.2rem;
  font-weight: 600;
`;

export const TextSmall = styled.p`
  color: ${colors.osloGray};
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
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
  box-shadow: 0 0.06rem 0.37rem ${colors.mineShaft}29;
  cursor: pointer;
  display: flex;
  height: 1.56rem;
  justify-content: center;
  width: 1.56rem;

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
