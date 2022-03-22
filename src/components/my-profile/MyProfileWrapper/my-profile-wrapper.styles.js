import Button from 'components/shared/Button';
import { Label } from 'components/shared/FormInput/form-input.styles';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const ProfileContainer = styled.div`
  margin: 2.2rem 12.5rem 2.2rem 4.5rem;
  width: 100%;
`;

export const UserInfoContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1.4rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  height: 8rem;
  width: 8rem;
  object-fit: cover;

  ${({ editMode }) =>
    editMode &&
    `
    border: 0.2rem solid ${colors.green};
  `}
`;

export const EditIconContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 50%;
  bottom: 0.5rem;
  box-shadow: 0 0.06rem 0.25rem ${colors.midGray};
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.35rem 0.5rem;
  position: absolute;
  right: 0;

  &:hover {
    background-color: ${colors.green};

    svg path {
      fill: ${colors.white};
    }
  }
`;

export const UserName = styled.h3`
  margin: 0.8rem 0;
`;

export const FormContainer = styled.form`
  .profile-select {
    .profile__control {
      border-radius: 1.12rem;
      border: 0.06rem solid ${colors.mercury};
      box-shadow: 0;
      padding: 0.08rem;
      font-size: 0.875rem;
    }

    .profile__multi-value {
      background-color: ${colors.white};
      border-radius: 1.1rem;
      box-shadow: 0 0.06rem 0.4rem ${colors.midGray};
      font-size: 0.85rem;
      margin: 0 0.2rem;
      padding: 0.2rem;
    }

    .profile__option {
      font-size: 0.875rem;
      padding-left: 0.6rem;
    }

    .profile__menu {
      .profile__option--is-selected {
        background-color: ${colors.white};
        color: ${colors.green};
        padding-left: 0.6rem;

        &::before {
          content: '▸ ';
        }
      }
    }

    .profile__placeholder {
      font-size: 0.8rem;
    }
  }
`;

export const FormSectionContainer = styled.div`
  background-color: ${colors.whiteSand}99;
  margin: 2.2rem 0;
  padding: 2.2rem 3.75rem;
`;

export const FormSectionTitle = styled.h4`
  margin: 0 0 1.6rem 0;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin-bottom: 1.4rem;

  > div {
    flex: 1;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${mq.desktopWide`
    flex-direction: row;
  `}
`;

export const SaveButton = styled(Button)`
  font-size: 1rem;
  height: 2.1rem;
  padding: 0 2.5rem;
`;

export const InputLabel = styled(Label)`
  padding: ${({ noPadding }) => noPadding && 0};
  width: 100%;
`;

export const SelectContainer = styled.div`
  .profile-select {
    .profile__control {
      border: ${({ error }) =>
        error
          ? `0.08rem solid ${colors.red}`
          : `0.08rem solid ${colors.mercury}`};
    }
  }
`;
