import FormInput from 'components/shared/FormInput';
import styled from 'styled-components';
import colors from 'styles/colors';

export const SellerTeamFromContainer = styled.div`
  padding-bottom: 0.5rem;
  background-color: ${colors.alabaster};
  margin: 2.5rem 0 0 0;
`;

export const PriceInput = styled(FormInput)`
  flex: 1;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin: 2rem 0;
  padding-top: 2rem;
  padding-left: 3.3rem;
`;

export const TitleText = styled.div`
  font-size: 1.5rem;
  color: ${colors.mineShaft};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const RowContainer = styled.div`
  display: flex;
  padding-right: 22.25rem;
  justify-content: flex-start;
  gap: 2.25rem;

  > div {
    width: 20rem;
  }
`;

export const CheckBoxContainer = styled.div`
  flex: 1;
  align-self: center;

  > div {
    margin-bottom: 0.1875rem;
    margin-top: 0.75rem;

    > label {
      font-size: 0.875rem;
      color: ${colors.gray};
    }
  }
`;

export const ButtonCheckBoxContainer = styled.div`
  margin: 0.875rem 0 0 0;
`;

export const ButtonText = styled.div`
  font-size: 1rem;
`;

export const TextAreaContainer = styled.div`
  width: 100%;
`;
