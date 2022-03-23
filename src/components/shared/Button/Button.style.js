import styled from 'styled-components';
import colors from 'styles/colors';

const StyledButton = styled.button`
  background-color: ${colors.green};
  border-radius: 1.75rem;
  border: none;
  color: ${colors.white};
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  height: 2.5rem;
  padding: 0 1.69rem;
  transition: 0.1s;
  cursor: pointer;
  width: 11.438rem;
  &:hover {
    box-shadow: 0rem 0.4rem 1.7rem -1rem ${colors.mineShaft};
  }

  &[disabled] {
    cursor: not-allowed;
  }

  ${({ light }) =>
    light &&
    `
  background-color: ${colors.white};
  color: ${colors.gray};
  border: 1px solid ${colors.gray};
  `}
`;

export default StyledButton;
