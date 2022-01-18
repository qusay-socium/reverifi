import bottomImg from 'assets/icons/verify-phone-main.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const VerifyPhoneContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  margin-top: 1.25rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
`;

export const Subtitle = styled.p`
  color: ${colors.gray};
  font-size: 1.125rem;
  margin: 0;
`;

export const BottomImage = styled.div`
  background-image: url(${bottomImg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 21.25rem;
  overflow-x: hidden;
  width: 100%;
`;
