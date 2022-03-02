import styled from 'styled-components';
import colors from 'styles/colors';

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 0.06rem 0.3rem ${colors.midGray};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 0.625rem;
  margin: 0 0 0.6rem;
  max-width: 19.125rem;
  max-height: 8.125rem;
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  margin: 0.4375rem;
  min-width: 5.25rem;
  min-height: 5.25rem;
  overflow: hidden;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Username = styled.div`
  color: ${colors.mineShaft};
  font-size: 1.125rem;
  font-weight: bold;
  margin: 0.3125rem 0rem;
`;

export const CompanyName = styled.div`
  color: ${colors.osloGray};
  font-size: 0.875rem;
  margin: 0 0 0.375rem 0;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactField = styled.div`
  align-items: center;
  display: flex;
  margin: 0.1875rem;
  gap: 0.625rem;
`;

export const PropertyIconContainer = styled.div`
  color: ${colors.osloGray};
`;

export const ContactEmail = styled.a`
  color: ${colors.osloGray};
  font-weight: 400;
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  white-space: nowrap;
`;

export const ContactText = styled.div`
  color: ${colors.osloGray};
  font-size: 0.875rem;
  margin: 0;
`;
