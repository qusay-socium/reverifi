import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const OverlayProperty = styled.h4`
  color: ${colors.midGray};
`;

export const OverlayAddress = styled.h3`
  color: ${colors.white};
  padding: 0 1rem;
`;

export const OverlayPrice = styled.h3`
  color: ${colors.green};
`;

export const OverlayFeatures = styled.div`
  display: flex;
  padding-bottom: 1rem;
  svg {
    margin-right: 1rem;
    path {
      fill: ${colors.white};
      stroke: ${colors.white};

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
  padding-bottom: 1rem;
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
  border-radius: 0.3rem 0.3rem 0 0;
  height: 12rem;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  height: 100%;
  margin-right: 1rem;
  width: 100%;
`;

export const CardBody = styled.div`
  position: relative;
  align-items: flex-start;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  min-height: 6rem;
  padding: 1rem;
`;

export const CardFooter = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border-top: 0.06rem solid ${colors.midGray};
  box-shadow: 0rem 0.06rem 0.56rem -0.09rem ${colors.mineShaft}29;
  display: flex;
  height: 3rem;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-radius: 0 0 0.3rem 0.3rem;
`;

export const TagContainer = styled.div`
  display: flex;
  left: 1rem;
  position: absolute;
  top: 1rem;
  transition: 0.2s;
`;

export const Tag = styled.div`
  background-color: ${({ isNew }) => (isNew ? colors.orange : colors.green)};
  border-radius: 0.25rem;
  color: ${colors.white};
  font-size: 0.625rem;
  margin-right: 0.4375rem;
  padding: 0.3125rem 1.1875rem;
  transition: 0.2s;
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

export const CardContainer = styled.div`
  background-color: ${colors.white};
  height: 100%;
  position: absolute;
  transition: all 0.5s;
  width: 100%;
`;

export const OverlayBackground = styled(CardContainer)`
  background-repeat: no-repeat;
  background-size: 100% 90%;
  background: url(${({ image }) => image});
  border-radius: 0.3rem;
  display: none;
  height: 100%;
  opacity: 0.1;
  overflow: hidden;
  position: absolute;
  transition: 0.2s;

  &:hover {
    background-size: 100% 100%;
    height: 100%;

    div {
      opacity: 1;
      bottom: 0;
    }
  }
`;

export const CardParent = styled.div`
  min-height: 22rem;
  max-height: 24rem;
  margin: 1.2rem;
  position: relative;
  border-radius: 2rem;

  &:hover ${CardContainer} {
    display: none;
  }

  &:hover ${OverlayBackground} {
    display: block;
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  align-items: center;
  background-color: ${colors.mineShaft}D4;
  border-radius: 0.3rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  opacity: 0.1;
  position: absolute;
  transition: 0.2s;
  width: 100%;
`;
