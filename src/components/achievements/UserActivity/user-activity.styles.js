import styled from 'styled-components';
import colors from 'styles/colors';

export const ActivityWrapper = styled.div`
  border-bottom: 0.0625rem solid #d8d8d8;
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

export const ActivityDateText = styled.label`
  font-family: 'Montserrat';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
`;

export const ActivityPoints = styled.label`
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  margin: auto 0;
  padding: 0.5625rem;
  background-color: #b2d235;
  border-radius: 0.375rem;
`;
