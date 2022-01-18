import styled from 'styled-components';
import colors from 'styles/colors';

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 1.3125rem;
    margin: 0rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 1.875rem 1.75rem 1.875rem;
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
  svg {
    margin: 0 0.5rem;
  }
`;

export const IconGroup = styled.div`
  align-items: center;
  color: ${colors.dustyGray};
  display: flex;
  gap: 0.5rem;
`;
