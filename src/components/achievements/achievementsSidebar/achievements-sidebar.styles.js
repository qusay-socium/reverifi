import { ReactComponent as Avatar } from 'assets/images/avatar.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Wrapper = styled.div`
  align-items: center;
  animation-duration: 0.4s;
  background-color: ${colors.alabaster};
  display: flex;
  flex-direction: column;
  margin: 5.875rem 0;
  max-width: 22.5rem;
  min-height: 60vh;
  width: 100%;
`;

export const NameWrapper = styled.p`
  color: ${colors.darkGray};
  font-family: 'Montserrat';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.02rem;
  line-height: 1.8125rem;
  margin: 0;
  margin-top: 1rem;
`;

export const SinceWrapper = styled.p`
  color: ${colors.darkGray};
  font-family: 'Inter';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.015rem;
  line-height: 1.375rem;
  margin: 0;
  mix-blend-mode: normal;
  opacity: 0.51;
  margin-top: 0.5625rem;
`;

export const AvatarWrapper = styled(Avatar)`
  height: 6.25rem;
  margin-top: 2rem;
  width: 6.25rem;
`;

export const PointsWrapper = styled.div`
  align-items: center;
  background: ${colors.white};
  border-radius: 1.6875rem;
  box-shadow: 0rem 0rem 0.3125rem rgba(34, 34, 34, 0.155458);
  display: flex;
  height: 2.5144rem;
  justify-content: space-evenly;
  margin-top: 2rem;
  width: 7.6875rem;
`;

export const PointsText = styled.label`
  font-family: 'Montserrat';
  color: ${colors.darkGray};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
`;

export const ActivitiesWrapper = styled.div`
  background: ${colors.white};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  left: 69rem;
  margin: 1.625rem 0;
  max-height: 20rem;
  top: 33.75rem;
  width: 19.5rem;
  overflow: scroll;
`;

export const YourActivityText = styled.label`
  color: ${colors.darkGray};
  font-family: 'Montserrat';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 1.375rem 0.625rem;
`;

export const ActivityWrapper = styled.div`
  border-bottom: 0.0625rem solid ${colors.midGray};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const ActivityDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActivityNameText = styled.label`
  font-family: 'Montserrat';
  color: ${colors.darkGray};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;
