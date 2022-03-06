import Button from 'components/shared/Button';
import styled from 'styled-components';

const DoneButton = styled(Button)`
  margin: 1rem 1rem 1rem 1rem;
  width: 7rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-top: 1rem;
  width: 20rem;
`;

export const Heading = styled.h4`
  padding-left: 0.7rem;
`;

export default DoneButton;
