import styled from 'styled-components';
import colors from 'styles/colors';

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
  min-width: 8rem;
  min-height: 8rem;
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
  //
`;

export const FormSectionContainer = styled.div`
  background-color: ${colors.whiteSand};
  padding: 2.2rem 3.75rem;
  margin: 2.2rem 0;
`;

export const FormSectionTitle = styled.h4`
  margin-bottom: 1.6rem;
`;

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;
  margin-bottom: 1.2rem;

  > div {
    flex: 1;
  }
`;
