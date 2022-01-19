import styled from 'styled-components';
import colors from 'styles/colors';

const StyledButton = styled.button`
  background-color: ${colors.green};
  border-radius: 1.75rem;
  border: none;
  color: ${colors.white};
  font-family: Montserrat;
  font-size: 0.75rem;
  font-weight: 600;
  height: 2.5rem;
  padding: 0 1.6875rem;

  &[disabled] {
    cursor: not-allowed;
  }

  :hover {
    cursor: pointer;
  }
`;

export default StyledButton;
