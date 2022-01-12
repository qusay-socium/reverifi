import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import colors from 'styles/colors';

export const DateInput = styled(DatePicker)`
  background-color: transparent;
  border-radius: 1.75rem;
  border: none;
  color: ${colors.mineshaft};
  flex: 1;
  font-size: 0.75rem;
  font-weight: 400;
  outline: none;
  padding: 1rem 1rem 1rem 2rem;
`;

export default DateInput;
