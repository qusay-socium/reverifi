import styled from 'styled-components';
import colors from 'styles/colors';

export const SellerTeamFromContainer = styled.div`
  padding-bottom: 0.5rem;
  background-color: ${colors.alabaster};
  margin: 2.625rem 0 0 0;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3125rem;
  margin: 2.0625rem 0;
  padding-top: 2.0625rem;
  padding-left: 3.375rem;
`;

export const TitleText = styled.div`
  font-size: 1.5rem;
  color: ${colors.mineShaft};
  font-weight: 600;
  margin: 0 0 0.6875rem;
`;

export const RowContainer = styled.div`
  display: flex;
  padding-right: 22.25rem;
  justify-content: flex-start;
  gap: 2.25rem;
  align-items: flex-end;
`;

export const SelectContainer = styled.div`
  flex-grow: 1;

  span {
    display: none;
  }

  > div {
    > div {
      border-radius: 1.1875rem;
    }
  }
`;

export const LabelText = styled.div`
  color: ${colors.matterhorn};
`;

export const CheckBoxContainer = styled.div`
  flex-grow: 1;

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
