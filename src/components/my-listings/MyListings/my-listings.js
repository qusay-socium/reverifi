import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const MyListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
  width: 100%;
`;

export const ListingImage = styled.img`
  border-radius: 0.3rem;
  height: 100%;
  width: 100%;
`;

export const Text = styled.h3`
  font-size: 2rem;
  font-weight: 600;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 4rem 0;
`;

export const Header = styled.div`
  justify-content: space-between;
  margin: 2rem 4rem 0 4rem;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CreateNewListingButton = styled(Button)`
  align-items: center;
  display: flex;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem;

  svg {
    margin: 0.1rem 0.5rem 0 0;
    width: 1rem;
    height: 1rem;

    path {
      fill: ${colors.white};
    }
  }
`;
