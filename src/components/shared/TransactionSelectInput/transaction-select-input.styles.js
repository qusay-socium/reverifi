import { Label } from 'components/shared/FormInput/form-input.styles';
import styled from 'styled-components';
import colors from 'styles/colors';

export const SelectContainer = styled.div`
  flex: 1;

  .transaction-select {
    .transaction__control {
      border-radius: 1.12rem;
      border: 0.06rem solid ${colors.midGray};
      box-shadow: 0;
      padding: 0.08rem;
      font-size: 0.875rem;

      ${({ rounded }) =>
        !rounded &&
        `
         border-radius: 0.5rem;
      `}
    }

    .transaction__multi-value {
      background-color: ${colors.white};
      border-radius: 1.1rem;
      box-shadow: 0 0.06rem 0.4rem ${colors.midGray};
      font-size: 0.85rem;
      margin: 0 0.2rem;
      padding: 0.2rem;
    }

    .transaction__option {
      font-size: 0.875rem;
      padding-left: 0.6rem;
    }

    .transaction__menu {
      z-index: 2;

      ${({ noOptions }) =>
        !noOptions &&
        `
         background-color: ${colors.alabaster};
        `}

      .transaction__option--is-selected {
        background-color: ${colors.white};
        color: ${colors.green};
        padding-left: 0.6rem;

        &::before {
          content: '▸ ';
        }
      }
    }

    .transaction__placeholder {
      font-size: 0.8rem;
    }
  }

  svg {
    display: ${({ rounded }) => (rounded ? 'none' : 'block')};
    color: ${colors.gray};
  }

  span {
    display: none;
  }
`;

export const InputLabel = styled(Label)`
  padding: ${({ noPadding }) => noPadding && 0};
  width: 100%;

  svg {
    display: inline;
  }
`;

export const LabelText = styled.p`
  display: inline-block;
  margin: 0;
  color: ${colors.matterhorn};
`;
