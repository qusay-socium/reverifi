import { ReactComponent as rawLocationPin } from 'assets/images/location-pin-simple.svg';
import { ReactComponent as rawSearchIcon } from 'assets/images/rounded-search-icon.svg';
import { AutocompleteMenuContainer } from 'components/shared/LocationSearchInput/search-input.style';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const StoryBoardContainer = styled.div`
  color: ${colors.mineShaft};
  display: flex;
  flex-direction: column;
  font-weight: 600;
  gap: 2rem;
  margin-top: 1.8rem;
  padding-bottom: 2rem;
  ${mq.tablet`
    align-items: center;
    flex-direction: row;
    gap: 0;
  `}
`;

export const StoryBoardSection = styled.div`
  flex: 1;
`;

export const SearchListingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;
  margin: 0 0.5313rem;

  ${mq.tablet`
    gap: 2rem;
    margin: 0;
  `}
`;

export const SearchListingsItem = styled.div`
  ${mq.tablet`
    padding: 0 2rem;
  `}

  ${mq.desktop`
    padding: 0 3rem;
  `}

  ${mq.desktopMax`
    padding: 0 4rem;
  `}
`;

export const SearchListingsHeader = styled.p`
  font-size: 1.75rem;
  margin: 0 0.8438rem;

  ${mq.tablet`
    margin: 0;
    font-size: 1.8rem;
  `}

  ${mq.desktop`
    font-size: 2.4rem;
  `}

  ${mq.desktopMax`
    font-size: 3.125rem;
  `}
`;

export const SearchInputGroupWrapper = styled.div`
  height: 3.4375rem;

  ${mq.desktopMax`
    height: 4.375rem;
  `}
`;

export const LocationPin = styled(rawLocationPin)`
  margin-left: 0.8125rem;
  width: 0.75rem;

  ${mq.desktopMax`
    margin-left: 1.5rem;
    width: 1rem;
  `}
`;

export const SearchIcon = styled(rawSearchIcon)`
  cursor: pointer;
  margin-right: 0.3125rem;
  width: 2.5625rem;
  ${mq.desktopMax`
    margin-right: .625rem;
    width: 3.5rem;
  `}
`;

export const StyledInputGroup = styled.div`
  align-items: center;
  border-radius: 2.1875rem;
  box-shadow: 0rem 0.0625rem 0.1875rem ${colors.mineShaft}29;
  display: flex;
  gap: 1rem;
  height: 100%;
  position: relative;
`;

export const ClearInputButton = styled.div`
  svg {
    margin-top: 0.5rem;
    height: 1rem;
    width: 0.9rem;
    cursor: pointer;

    path {
      fill: ${colors.dustyGray};

      &:hover {
        fill: ${colors.gray};
      }
    }
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${colors.mineShaft};
  flex: 1;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  height: 2.5rem;
  outline: none;

  ::placeholder {
    font-size: 1rem;
  }

  ${mq.desktopMax`
    font-size: 1.2rem;
    ::placeholder {
      font-size: 1.2rem;
    }
  `}
`;

export const MenuContainer = styled(AutocompleteMenuContainer)`
  top: 98%;
`;
