import styled from 'styled-components';
import colors from '../../styles/colors';
import mq from '../../styles/media-query';

export const ComingSoonContainer = styled.div`
  color: ${colors.mineShaft};
  display: flex;
  flex-direction: column;

  ${mq.tablet`
    align-items: center;
    flex-direction:row;
    height: 100vh;
  `};
`;

export const ComingSoonSection = styled.div`
  flex: 1;
  padding: 0 1.125rem;

  svg {
    display: none;
  }

  ${mq.tablet`
    padding: 0 3.125rem;

    svg {
      display: block;
    }
  `}
`;

export const ComingSoonItems = styled.div`
  svg {
    display: block;
    margin-bottom: 1.5rem;
  }

  ${mq.tablet`
    svg {
      display:none;
    }
  `};
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

export const ComingSoonDescription = styled.span`
  color: ${colors.gray};
  font-size: 1.125rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.375rem;
  font-weight: 600;
  gap: 2rem;
  margin: 2rem auto;
  max-width: 22.3125rem;

  p {
    margin: 0rem;
  }

  ${mq.tablet`
    margin:2rem 0rem;
    padding-left: 1rem;
  `}
`;

export const InputField = styled.input`
  border: none;
  border-bottom: 0.0823rem solid ${colors.lightGray};
  font-size: 1.125rem;
  outline: none;
`;

export const Button = styled.button`
  background-color: ${colors.lightGreen};
  border-radius: 1.25rem;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  height: 2.5rem;
  width: 8.4375rem;
`;
