import notFound from 'assets/images/not-found.png';
import Button from 'components/shared/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Text } from './not-found.style';

/**
 * not found page .
 *
 * @return {JSX.Element}
 */
function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={notFound} alt="not found page" />
      <Text>The page you requested could not be found</Text>

      <Button onClick={() => navigate('/')}>Go to homePage</Button>
    </Container>
  );
}

export default NotFoundPage;
