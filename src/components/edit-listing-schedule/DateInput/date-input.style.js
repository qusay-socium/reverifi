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
  padding: 0.5rem;
  text-align: center;
  width: 100%;
`;

export const DateInputContainer = styled.div`
  background-color: transparent;
  border-radius: 1.75rem;
  border: 0.06rem ${colors.midGray} solid;
  color: ${colors.mineshaft};
  flex: 1;
  margin-right: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  svg {
    margin: 0 1rem;
    width: 1.8rem;
    height: 1rem;
  }
`;

export const InputLabel = styled.label`
  font-size: 0.9rem;
  color: ${colors.liver};
  margin-bottom: 0.5rem;
`;

export const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
