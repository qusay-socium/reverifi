import Button from 'components/shared/Button';
import styled from 'styled-components';

// TODO: move to global styles
const fontStyles = {
  pageHeader: {
    size: '1.5rem',
    weight: 600,
  },
};

// TODO: extract and use in the main page
export const PageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 100%;
  padding: 0 1rem;
`;

export const Header = styled.h2`
  font-size: ${fontStyles.pageHeader.size};
  font-weight: ${fontStyles.pageHeader.weight};
`;

export const StyledButton = styled(Button)`
  font-size: 1rem;
`;
