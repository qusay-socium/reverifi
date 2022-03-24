import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Container = styled.div`
  margin: 1rem 0;

  ${mq.desktop`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 6rem;
    padding-bottom: 2rem;
  `};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${mq.desktop`
  gap: 2rem;
  margin-right: 2rem;
  max-width: calc(100% - 22rem);
`};

  ${mq.desktopWide`
    gap: 2rem;
    margin-right: 4rem;
    max-width: calc(100% - 25rem);
  `};
`;

export const Statistics = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 2rem;

  ${mq.mobile`
  gap: 0.75rem;
  `};
`;

export const Value = styled.span`
  font-weight: bold;
`;

export const ClaimButton = styled(Button)`
  font-size: 1rem;
`;

export const Paragraph = styled.p`
  line-height: 1.25rem;
  word-break: break-all;
`;

export const Claim = styled.div`
  border: 0.06rem solid ${colors.midGray};
  border-radius: 0.5rem;
  display: flex;
  padding: 2rem 0.5rem;
  gap: 4rem;

  p {
    color: ${colors.gray};
  }

  ${mq.desktopWide`
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem;
    text-align: left;
  `};
`;

export const Partition = styled.span`
  border-right: 0.0625rem solid ${colors.midGray};
  margin: 0 1rem;
`;

export const Label = styled.span``;
