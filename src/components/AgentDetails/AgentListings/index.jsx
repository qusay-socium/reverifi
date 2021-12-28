import React from 'react';
import image from 'assets/img1.png';
import { ReactComponent as AirConditionerIcon } from 'assets/icons/air-conditioner.svg';
import { ReactComponent as BathtubIcon } from 'assets/icons/bathtub.svg';
import { ReactComponent as BedroomIcon } from 'assets/icons/bedroom.svg';
import { ReactComponent as BenchIcon } from 'assets/icons/bench.svg';
import { ReactComponent as Camera } from 'assets/photo-camera.svg';
import { ReactComponent as Comment } from 'assets/comment.svg';
import { ReactComponent as FilledHeart } from 'assets/filled-heart.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as Location } from 'assets/location.svg';
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg';
import { ReactComponent as WifiIcon } from 'assets/icons/wifi.svg';
import data from './data';
import {
  BodyContainers,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImageContainer,
  CardInformation,
  CardPrice,
  CardsContainer,
  CornerItems,
  HeaderIcons,
  IconGroup,
  Image,
  ListingsContainer,
  LocationTagContainer,
  PhotosNumberContainer,
  ServiceQuantity,
  Tag,
  Title,
} from './agent-listings.style';

/**
 * Listing details section.
 *
 * @return {JSX.Element}
 */
function AgentListings() {
  return (
    <ListingsContainer>
      <Title>Listings</Title>
      <CardsContainer>
        {[1, 2, 3].map((index) => (
          <Card key={index}>
            <CardImageContainer>
              <Image src={image} />
              <CornerItems left top>
                <Tag>{data.tag}</Tag>
              </CornerItems>
              <CornerItems right top>
                <PhotosNumberContainer>
                  {data.photos}
                  <Camera />
                </PhotosNumberContainer>
              </CornerItems>
              <CornerItems bottom left>
                <LocationTagContainer>
                  <Location />
                  {data.location}
                </LocationTagContainer>
              </CornerItems>
            </CardImageContainer>
            <CardInformation>
              <CardHeader>
                <CardPrice>
                  <p>{data.price}</p>
                  <span>{data.time}</span>
                </CardPrice>
                <HeaderIcons>
                  <HeartIcon />
                  <ShareIcon />
                </HeaderIcons>
              </CardHeader>
              <CardBody>
                <p>{data.description}</p>
              </CardBody>
              <BodyContainers>
                <IconGroup>
                  <ServiceQuantity>2</ServiceQuantity>
                  <BedroomIcon />
                </IconGroup>

                <WifiIcon />

                <IconGroup>
                  <ServiceQuantity>1</ServiceQuantity>
                  <BathtubIcon />
                </IconGroup>

                <AirConditionerIcon />

                <BenchIcon />
              </BodyContainers>

              <CardFooter>
                <IconGroup>
                  <FilledHeart />
                  <ServiceQuantity>{data.likes}</ServiceQuantity>
                </IconGroup>

                <IconGroup>
                  <Comment />
                  <ServiceQuantity>{data.comments}</ServiceQuantity>
                </IconGroup>
              </CardFooter>
            </CardInformation>
          </Card>
        ))}
      </CardsContainer>
    </ListingsContainer>
  );
}

export default AgentListings;
