import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  svg {
    height: 1.2rem;
    width: 1.2rem;
  }
`;

export const FeaturedIconContainer = styled(Container)`
  svg {
    width: 0.8rem;
    margin-right: 0.5rem;
  }
`;

export const AreaText = styled.p`
  font-size: 0.8rem;
  margin: 0 0.5rem 0 0;
  white-space: nowrap;
`;

export const OverlayProperty = styled.h4`
  color: ${colors.midGray};
`;

export const OverlayAddress = styled.h3`
  color: ${colors.white};
  padding: 0 1rem;
  margin: 0;
  text-align: center;
`;

export const OverlayPrice = styled.h3`
  color: ${colors.green};
  margin-top: 0;
`;

export const OverlayFeatures = styled.div`
  padding-bottom: 1rem;
  display: flex;
  color: ${colors.white};
  justify-content: center;
  align-items: center;

  svg {
    height: 1.1rem;
    margin-right: 0.3rem;
    width: 1.5rem;

    path {
      fill: ${colors.white};
    }

    circle {
      stroke: ${colors.white};
    }
  }

  div {
    span {
      color: ${colors.white};
    }
  }
`;

export const OverlayButton = styled(Button)`
  margin-top: 1rem;
  color: ${colors.white};
`;

export const OverlayIcons = styled.div`
  padding-bottom: 0.5rem;
  position: absolute;
  right: 1rem;
  bottom: 0;
`;

export const InfoContainer = styled(Container)`
  align-items: flex-start;
  flex-direction: column;
`;

export const BodyIconsContainer = styled(Container)`
  svg {
    height: 1.1rem;
    margin-right: 0.3rem;
    width: 1.5rem;
  }
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
  width: 100%;
`;

export const CardFooter = styled.div`
  align-items: center;
  border-top: 0.06rem solid ${colors.midGray};
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
  font-size: 1.12rem;
  font-weight: 600;
  margin: 0.18rem 0;
`;

export const TextMedium = styled.p`
  color: ${colors.mineShaft};
  font-size: 1rem;
  margin: 0.2rem 0 0 0;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 15rem;
`;

export const AddressTextContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    height: 1rem;
  }
`;

export const TextSmall = styled.p`
  color: ${colors.osloGray};
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
`;

export const ServiceQuantity = styled.span`
  color: ${colors.mineShaft};
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 0.2rem;
`;

export const CardContainer = styled.div`
  background-color: ${colors.white};
  height: 100%;
  position: absolute;
  width: 100%;
`;

export const OverlayBackground = styled(CardContainer)`
  background-repeat: no-repeat;
  background: url(${({ image }) => image});
  border-radius: 0.3rem;
  background-size: 100% 100%;
  display: none;
  overflow: hidden;
  height: 100%;
`;

export const OverlayBody = styled.div`
  align-items: center;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Overlay = styled.div`
  background-color: ${colors.mineShaft}D4;
  height: 100%;
  opacity: 0;
  transition: 0.3s;

  &:hover {
    padding-top: 4rem;
    opacity: 1;
  }
`;

export const CardParent = styled.div`
  box-shadow: 0rem 0.06rem 0.6rem 0.1rem ${colors.mineShaft}29;
  margin: 1.2rem;
  max-height: 24rem;
  min-height: 22rem;
  overflow: hidden;
  position: relative;
  border-radius: 0.3rem;

  &:hover ${CardContainer} {
    display: none;
  }

  &:hover ${OverlayBackground} {
    display: block;
    opacity: 1;
  }
`;
