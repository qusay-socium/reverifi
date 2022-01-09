import styled from 'styled-components';
import colors from 'styles/colors';

const StyledButton = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || colors.green};
  border-radius: ${({ borderRadius }) => borderRadius || '1.75rem'};
  border: none;
  color: ${({ color }) => color || colors.white};
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || '0.75rem'};
  font-weight: 600;
  height: ${({ height }) => height || '2.5rem'};
  outline: none;
  padding: ${({ padding }) => padding || '0 2rem'};

  &[disabled] {
    cursor: not-allowed;
  }
`;

export default StyledButton;
