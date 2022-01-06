import styled from 'styled-components';
import colors from 'styles/colors';

const StyledButton = styled.button`
  background-color: ${colors.green};
  border-radius: 1.75rem;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  font-family: Montserrat;
  font-size: 0.75rem;
  font-weight: 600;
  height: 2.5rem;
  outline: none;
  padding: 0 2rem;

  &[disabled] {
    cursor: not-allowed;
  }
`;

export default StyledButton;
