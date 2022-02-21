import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  button {
    font-size: 1rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2rem 1.9rem 1rem 1.9rem;
`;

export const CardPrice = styled.div`
  color: ${colors.green};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    margin: 0;
  }

  span {
    color: ${colors.dustyGray};
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const IconGroup = styled.div`
  align-items: center;
  color: ${colors.dustyGray};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1.7rem !important;
    height: 1.5rem !important;

    path {
      fill: ${colors.gray};
    }
  }

  span {
    font-size: 0.9rem;
  }
`;

export const FooterIconGroup = styled(IconGroup)`
  svg {
    width: 1.2rem !important;
    height: 1.2rem !important;
  }

  span {
    font-size: 0.8rem;
  }
`;

export const IconsContainers = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  ${mq.desktop`
    gap: 1rem;
    `}
`;

export const HeaderIconWrapper = styled.div`
  border-radius: 50%;
  background-color: ${colors.whiteSand};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  box-shadow: 0 0.06rem 0.3rem ${colors.midGray};

  :hover {
    background-color: ${colors.green};
    color: ${colors.white};

    svg path {
      fill: ${({ fill }) => fill && colors.white};
      opacity: 1;
      stroke: ${({ stroke }) => stroke && colors.white};
    }
  }
`;
