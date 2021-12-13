import styled from 'styled-components';
import colors from 'styles/colors';

export const Card = styled.div`
  height: 19.125rem;
  max-width: 20rem;
  min-width: 20rem;
  overflow: hidden;
  margin: 1rem 0rem;
  border-radius: 0.4375rem;
  position: relative;
  box-shadow: 0.5rem 0.3125rem 0.5rem rgba(51, 119, 255, 0.12);
`;

export const CardHeader = styled.div``;

export const ListingProperties = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
  position: absolute;
  top: 1%;
`;

export const Property = styled.p`
  margin: 0.5rem 0.1rem 0.1rem 0.5rem;
  padding: 0.2rem 0.2rem 0.2rem 0.2rem;
  color: white;
  border-radius: 0.2rem;
  font-size: 0.7rem;
  background-color: ${(props) =>
    props.eventType === 'Personal' ? colors.red : colors.mainGreen};
`;

export const EventImage = styled.img`
  width: 20rem;
  height: 14.375rem;
  object-fit: stretch;
`;

export const EventDate = styled.div`
  height: 3.5625rem;
  width: 3.9375rem;
  background-color: ${colors.mainGreen};
  position: absolute;
  top: 0;
  right: 5%;
  border-bottom-right-radius: 0.1875rem;
  border-bottom-left-radius: 0.1875rem;
  color: ${colors.white};
  font-size: 20px;
  text-align: center;
  padding: 0.375rem 0.75rem 0.3125rem 0.75rem;

  & p {
    margin: 0;
    justify-self: center;
  }
`;

export const CardFooter = styled.div`
  min-height: 4.8125rem;
  padding-top: 0.4rem;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0rem 1rem 0rem 1rem;
  margin: 0;
  text-align: left;

  & p {
    margin: 0;
  }

  & svg {
    margin: 0.5rem 0.1rem 0rem 0.1rem;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 0.2rem 0.5rem 0rem 0.3rem;
  margin-right: 0.5rem;
  font: 0.75rem;

  & p {
  }

  & svg {
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
  }
`;

export const Attendees = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.mainGreen};
`;

export const Title = styled.p`
  margin-top: -0.2rem;
  font-size: 1rem;
`;

export const EventInfo = styled.p`
  font-size: 0.75rem;
`;
