import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Container = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;

  ${mq.desktop`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 6.5625rem;
    padding-bottom: 2rem;
  `};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${mq.desktop`
    gap: 2rem;
    margin-right: 6rem;
    width: 45.625rem;
  `};
`;

export const FormContainer = styled.div`
  border: 0.0625rem solid ${colors.midGrey};
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0 0;

  ${mq.desktop`
    height: 35.8125rem;
    width: 25rem;
  `};
`;

export const Title = styled.h2`
  font-size: 1.375rem;
  font-weight: bold;
  margin: 1rem 0 1rem;
  padding: 0;

  ${mq.desktop`
    margin: 0 0 1rem;
  `};
`;

export const Statistics = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.125rem;
  gap: 0.75rem;
  margin: 0 0 2rem;
`;

export const Value = styled.span`
  font-weight: bold;
`;

export const OverviewParagraph = styled.p`
  margin: 0;
`;

export const Claim = styled.div`
  border: 0.0625rem solid ${colors.midGrey};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0.5rem;
  text-align: center;

  ${mq.desktopWide`
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem;
    text-align: left;
   `};
`;

export const ClaimHeading = styled.h2`
  font-size: 1.375rem;
  margin: 0 0 0.5rem;
`;

export const ClaimParagraph = styled.p`
  color: ${colors.gray};
  margin: 0.5rem auto 0;
  width: 15rem;

  ${mq.desktopWide`
      margin: 0;
      width: fit-content;
   `}
`;

export const ClaimButton = styled(Button)`
  border-radius: 1.25rem;
  font-size: 1rem;
  padding: 0.6875rem 0.9375rem 0.5625rem;
  margin: 1.5rem auto 0;
  min-width: fit-content;

  ${mq.desktopWide`
      margin: 0;
   `}
`;

export const ScheduleVisit = styled.div`
  border: 0.0625rem solid ${colors.midGrey};
  border-radius: 0.5rem;
  padding: 1.5rem;

  h2 {
    color: ${colors.mineShaft};
    font-size: 1.375rem;
  }

  p {
    color: ${colors.gray};
  }
`;

export const Partition = styled.span`
  border-right: 0.0625rem solid ${colors.midGrey};
  margin: 0 1rem;
`;