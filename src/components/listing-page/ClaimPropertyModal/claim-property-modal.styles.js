import styled from 'styled-components';
import colors from 'styles/colors';

export const ClaimPropertyContainer = styled.div`
  display: flex;

  > div {
    flex: 1;
  }
`;

export const ClaimImage = styled.img`
  width: 36rem;
  min-height: 100%;
`;

export const ClaimInfoContainer = styled.div`
  padding: 3rem 1.2rem;

  > h3 {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 0.3rem;
  }
`;

export const ClaimAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ClaimUploadContainer = styled.div`
  padding: 1.7rem 1.2rem;
  border-radius: 0.5rem;
  background: ${colors.green}29;

  > p {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

export const DocumentUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  position: relative;

  > div:first-child {
    flex: auto;
  }
`;

export const LoadingImage = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const IsClaimedMessage = styled.p`
  flex: 1;
  align-self: center;
  margin: 0;
  text-align: center;
  font-size: 1.2rem;
  color: ${colors.matterhorn};
  line-height: 1.5rem;
`;
