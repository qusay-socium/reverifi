import Button from 'components/shared/Button';
import styled from 'styled-components';
import mq from 'styles/media-query';

export const PageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 100%;
  padding: 0 0.625rem;

  ${mq.desktop`
    min-width: 51.25rem; 
    padding: 0;
  `};

  ${mq.desktopExtraMax`
    min-width: 78.75rem; 
  `}
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.5rem;
`;

export const StyledButton = styled(Button)`
  font-size: 1rem;
`;
