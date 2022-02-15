import React from 'react';
import wideApartImg2 from 'assets/images/wide-apartment2.png';
import AgentImg from 'assets/images/user-photo.jpg';
import {
  Img,
  ImgContainer,
  CardsContainer,
} from 'components/transaction/advertisement/advertisement.styles';
import AgentCard from 'components/transaction/AgentCard';
import DataCard from 'components/transaction/DataCard';

/**
 * Advertisement.
 *
 * @return {JSX.Element} The apartment and Agent data.
 */
export default function Advertisement() {
  return (
    <ImgContainer>
      <Img src={wideApartImg2} alt="apartment2" />
      <CardsContainer>
        <DataCard />
        <AgentCard
          agentImg={AgentImg}
          agentName="John Doe"
          companyName="Agent"
          email="john.doe@gmail.com"
          phoneNumber="0123849898"
        />
      </CardsContainer>
    </ImgContainer>
  );
}
