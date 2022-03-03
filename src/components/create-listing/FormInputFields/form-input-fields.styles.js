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
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  margin: 1.25rem 0 0;
  padding: 0.75rem 1.5rem;
  transition: 0.2s;
  width: 100%;

  &:hover {
    background-color: ${colors.green};
    color: ${colors.white};

    svg {
      path {
        fill: ${colors.white};
      }

      rect {
        fill: ${colors.white};
      }
    }
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

export const SelectContainer = styled.div`
  .tags-select {
    .tags__control {
      border-radius: 0.4rem;
      border: ${({ error }) =>
        error
          ? `0.08rem solid ${colors.red}`
          : `0.08rem solid ${colors.mercury}`};
      box-shadow: 0;
      padding: 0.7rem;
      font-size: 0.875rem;
    }

    .tags__multi-value {
      background-color: ${colors.green};
      border-radius: 1.1rem;
      box-shadow: 0 0.06rem 0.4rem ${colors.midGray};
      font-size: 1rem;
      margin: 0 0.2rem;
      padding: 0.6rem;
      color: ${colors.white};
      font-weight: 600;

      .tags__multi-value__label {
        color: ${colors.white};
      }

      .tags__multi-value__remove {
        :hover {
          color: inherit;
        }
      }
    }

    .tags__option {
      font-size: 0.875rem;
      padding-left: 0.6rem;

      &:hover,
      &:active {
        color: ${colors.white};
      }
    }

    .tags__menu {
      .tags__option--is-selected {
        background-color: ${colors.white};
        color: ${colors.green};
      }
    }

    .tags__placeholder {
      font-size: 0.8rem;
    }
  }
`;

export const InputLabel = styled.div`
  align-items: center;
  color: ${colors.mineShaft};
  display: flex;
  font-size: 0.93rem;
  gap: 0.5rem;
  padding-bottom: 0.6rem;
  width: 100%;

  span {
    font-size: 0.7rem;
    color: ${colors.gray};
  }
`;
