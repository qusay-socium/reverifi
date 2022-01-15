import airConditioning from 'assets/images/air-conditioner.svg';
import apartImg1 from 'assets/images/apartment1.png';
import apartImg2 from 'assets/images/apartment2.png';
import apartImg3 from 'assets/images/apartment3.png';
import centralHeating from 'assets/images/bathtub.svg';
import diningRoom from 'assets/images/dining.svg';
import dryer from 'assets/images/hair-dryer.svg';
import cleaningService from 'assets/images/mop-water-bucket-and-cleaning-spray.svg';
import parking from 'assets/images/parking.svg';
import pImg from 'assets/images/person.png';
import gym from 'assets/images/rings-gym.svg';
import sauna from 'assets/images/sauna.svg';
import image01 from 'assets/images/slider/abstract01.png';
import image02 from 'assets/images/slider/abstract02.jpg';
import image03 from 'assets/images/slider/abstract03.jpg';
import image04 from 'assets/images/slider/abstract04.jpeg';
import swimmingPool from 'assets/images/swimming-pool.svg';
import tvCable from 'assets/images/tv.svg';
import wifi from 'assets/images/wifi.svg';

const data = {
  details: {
    Baths: '3',
    Beds: '1',
    Garages: '1',
    'Home Area': '225sqft',
    'Lot Dimensions': '225sqft',
    'Lot area': '225sqft',
    Rooms: '2',
    Status: 'For Rent',
    'Year Built': '2001',
  },
  features: {
    'Air Conditioning': true,
    'Central Heating': true,
    'Cleaning Service': true,
    'Dining Room': true,
    Dryer: true,
    GYM: true,
    Parking: true,
    Sauna: true,
    'Swimming Pool': true,
    'TV Cable': true,
    WIFI: true,
  },
  featuresIcons: [
    airConditioning,
    centralHeating,
    cleaningService,
    diningRoom,
    dryer,
    gym,
    parking,
    sauna,
    swimmingPool,
    tvCable,
    wifi,
  ],
  images: [
    { alt: 'abstract01', src: image01 },
    { alt: 'abstract02', src: image02 },
    { alt: 'abstract03', src: image03 },
    { alt: 'abstract04', src: image04 },
  ],
  location: 'Bronx, NY 10459',
  overview:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
  price: '$30,000',
  similarListings: [
    {
      distance: '1.1km away',
      img: apartImg1,
      location: 'Bronx, NY 10459',
      personImg: pImg,
      price: '$123/Month',
      services: {
        bathroom: 1,
        bedroom: 2,
      },
      tags: ['New', 'Sale'],
      title: 'Apartment#1',
    },
    {
      distance: '1.1km away',
      img: apartImg2,
      location: 'Bronx, NY 10459',
      personImg: pImg,
      price: '$30,000',
      services: {
        bathroom: 1,
        bedroom: 2,
      },
      tags: ['New'],
      title: 'Apartment#2',
    },
    {
      distance: '1.1km away',
      img: apartImg3,
      location: 'Bronx, NY 10459',
      personImg: pImg,
      price: '$30,000',
      services: {
        bathroom: 1,
        bedroom: 2,
      },
      tags: ['Rent'],
      title: 'Apartment#3',
    },
    {
      distance: '1.1km away',
      img: apartImg1,
      location: 'Bronx, NY 10459',
      personImg: pImg,
      price: '$123/Month',
      services: {
        bathroom: 1,
        bedroom: 2,
      },
      tags: ['New', 'Sale'],
      title: 'Apartment4',
    },
    {
      distance: '1.1km away',
      img: apartImg2,
      location: 'Bronx, NY 10459',
      personImg: pImg,
      price: '$30,000',
      services: {
        bathroom: 1,
        bedroom: 2,
      },
      tags: ['New'],
      title: 'Apartment#5',
    },
    {
      distance: '1.1km away',
      img: apartImg3,
      location: 'Bronx, NY 10459',
      personImg: pImg,
      price: '$30,000',
      services: {
        bathroom: 1,
        bedroom: 2,
      },
      tags: ['Rent'],
      title: 'Apartment#6',
    },
  ],
  // statistics should be rendered in this order.
  statistics: {
    'Time on Reverifi': '8 days',
    Views: '30',
    // eslint-disable-next-line sort-keys
    Saves: '10',
    Shared: '12',
  },
};

export default data;
