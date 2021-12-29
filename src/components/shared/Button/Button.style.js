import styled from 'styled-components';
import colors from 'styles/colors';

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || colors.green};
  border-radius: ${(props) => props.borderRadius || '1.75rem'};
  border: none;
  color: ${(props) => props.color || colors.white};
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  height: ${(props) => props.height || '2.5rem'};
  outline: none;
  padding: ${(props) => props.padding || '0 2rem'};

  &[disabled] {
    cursor: not-allowed;
  }
`;

export default StyledButton;
