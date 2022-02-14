import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const ListingSearchContainer = styled.div`
  flex: 1;
`;

export const FilterButton = styled(Button)`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 2.5rem;
  border: none;
  box-shadow: 0rem 0.0625rem 0.1875rem ${colors.mineShaft}29;
  color: ${colors.gray};
  display: flex;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0 0.7rem;
  padding: 0.3rem 0.8rem;

  svg {
    height: 1.1rem;
    padding-right: 0.4rem;
    width: 1.1rem;

    path {
      fill: ${colors.green};
    }
  }
`;

export const SearchButton = styled(Button)`
  margin: 0 0.7rem;
  padding: 0.3rem 0.8rem;
`;

export const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 1.5rem 0 1.5rem 2rem;
`;

export const InputWrapper = styled.div`
  position: relative;

  input {
    padding: 1rem;
    width: 5rem;

    ${mq.mobile`
    min-width: 8rem;
     `}

    ${mq.tablet`
    min-width: 15rem;
     `}
  }

  svg {
    position: absolute;

    bottom: 1.3rem;
    right: 0.5rem;
    width: 1rem;
    height: 0.8rem;
    cursor: pointer;

    path {
      fill: ${colors.dustyGray};

      &:hover {
        fill: ${colors.gray};
      }
    }
  }
`;
