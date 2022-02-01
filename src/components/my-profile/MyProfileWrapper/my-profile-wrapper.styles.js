import Button from 'components/shared/Button';
import { Error, Label } from 'components/shared/FormInput/form-input.styles';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const ProfileContainer = styled.div`
  margin: 2.2rem 12.5rem 2.2rem 4.5rem;
  width: 100%;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const UserImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;

export const EditIconContainer = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0;
  background-color: ${colors.white};
  box-shadow: 0 0.06rem 0.25rem ${colors.midGray};
  padding: 0.5rem 0.5rem 0.35rem 0.5rem;
  border-radius: 50%;
  cursor: pointer;

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

export const UserDescription = styled.p`
  margin: 0;
  color: ${colors.gray};
`;

export const FormContainer = styled.form`
  .profile-select {
    .profile__control {
      padding: 0.08rem;
      border: 0.06rem solid ${colors.mercury};
      border-radius: 1.12rem;
      box-shadow: 0;
    }

    .profile__multi-value {
      font-size: 0.85rem;
      padding: 0.2rem;
      margin: 0 0.2rem;
      background-color: ${colors.white};
      box-shadow: 0 0.06rem 0.4rem ${colors.midGray};
      border-radius: 1.1rem;
    }

    .profile__option {
      font-size: 0.875rem;
    }

    .profile__placeholder {
      font-size: 0.8rem;
    }
  }
`;

export const FormSectionContainer = styled.div`
  background-color: ${colors.whiteSand}99;
  padding: 2.2rem 3.75rem;
  margin: 2.2rem 0;
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

  ${mq.desktopWide`
    flex-direction: row;
  `}
`;

export const AddressInputsContainer = styled(InputsContainer)`
  gap: 1rem;
  margin-bottom: 0;
  flex-wrap: wrap;

  div:last-child {
    flex: 2;
  }

  ${mq.desktopWide`
      align-items: flex-start;
      gap: 0.5rem;
  `}
`;

export const SaveButton = styled(Button)`
  padding: 0 2.5rem;
  height: 2.1rem;
  font-size: 0.95rem;
`;

export const InputLabel = styled(Label)`
  width: 100%;
  padding: ${({ noPadding }) => noPadding && 0};
`;

export const InputError = styled(Error)``;
