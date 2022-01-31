import Button from 'components/shared/Button';
import { Error } from 'components/shared/FormInput/form-input.styles';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const ButtonsContainer = styled.div`
  margin-bottom: 1.25rem;

  ${mq.tabletWide`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem
  `}
`;

export const IdentifierButton = styled(Button)`
  align-items: center;
  background-color: ${({ selected }) =>
    selected ? colors.green : colors.mercury};
  border: 0.0625rem solid
    ${({ selected }) => (selected ? colors.green : colors.mercury)};
  border-radius: 1.1875rem;
  color: ${({ selected }) => (selected ? colors.white : colors.mineShaft)};
  display: flex;
  font-size: 1rem;
  margin: 1.25rem 0 0;
  padding: 0.75rem 1.5rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${colors.green};
    color: ${colors.white};
  }

  svg {
    margin-right: 0.5rem;

    path {
      fill: ${({ selected }) => (selected ? colors.white : colors.mineShaft)};
    }

    rect {
      fill: ${({ selected }) => (selected ? colors.white : colors.mineShaft)};
    }
  }
`;

export const SelectOneError = styled(Error)`
  padding-left: 1rem;
`;

export const DetailsInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;

  ${mq.tabletWide`
    column-gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
  `}
`;

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem 0;
`;
