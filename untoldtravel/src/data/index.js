const USERS = {
  1: {
    id: 1,
    username: 'Alexia Jane',
    avatar: require('../../assets/images/users/32.jpeg'),
  },
  2: {
    id: 2,
    username: 'Jacky Depp',
    avatar: require('../../assets/images/users/35.jpeg'),
  },
};

const REVIEWS = {
  1: {
    id: 1,
    date: '21 May, 2022',
    author: USERS[1],
    rating: 7,
    text: 'Lorem ipsum dolor sit amet. Iusto nihil et porro soluta ut labore nesciunt sed dolor nihil qui laudantium consequatur',
  },
  2: {
    id: 2,
    date: '14 July, 2021',
    author: USERS[2],
    rating: 9.1,
    text: 'Lorem ipsum dolor sit amet.',
  },
};

export const BUSINESS = [
  {
    id: 1,
    title: 'WFH Plumbing',
    //image require(''),
    location: 'Vredenburg',
    rating: 9.3,
  },
  {
    id: 2,
    title: 'hemp nation',
    //image require(''),
    location: 'Cape Town',
    rating: 9.3,
  },
  {
    id: 3,
    title: 'food delivery',
    //image require(''),
    location: 'Cape Town',
    rating: 9.3,
  },
];

export const HOTELS = {
  1: {
    id: 1,
    title: 'Argos in Cappadocia',
    image: require('../../assets/images/hotels/cp-1.jpeg'),
    location: 'Turkey, Cappadocia',
    rating: 9,
    pricePeerDay: 'R130',
  },
  2: {
    id: 2,
    title: 'Sultan Cave Suites',
    image: require('../../assets/images/hotels/cp-2.jpeg'),
    location: 'Turkey, Cappadocia',
    rating: 9.3,
    pricePeerDay: 'R230',
  },
  3: {
    id: 3,
    title: 'Villa Brunella',
    image: require('../../assets/images/hotels/capri-1.jpeg'),
    location: 'Italy, Capri',
    rating: 9.4,
    pricePeerDay: 'R280',
  },
  4: {
    id: 4,
    title: 'Hotel La Floridiana',
    image: require('../../assets/images/hotels/capri-2.jpeg'),
    location: 'Italy, Capri',
    rating: 9.3,
    pricePeerDay: 'R190',
  },
  5: {
    id: 5,
    title: "Le Taha'a by Pearl Resorts",
    image: require('../../assets/images/hotels/polynesia-1.jpeg'),
    location: 'Polynesia, Bora Bora',
    rating: 9.2,
    pricePeerDay: 'R250',
  },
  6: {
    id: 6,
    title: 'Le Meridien Bora Bora',
    image: require('../../assets/images/hotels/polynesia-2.jpeg'),
    location: 'Polynesia, Bora Bora',
    rating: 9.4,
    pricePeerDay: 'R270',
  },
  7: {
    id: 7,
    title: 'InterContinental Phuket Resort',
    image: require('../../assets/images/hotels/phuket-1.jpg'),
    location: 'Thailand, Phuket',
    rating: 9.2,
    pricePeerDay: 'R210',
  },
  8: {
    id: 8,
    title: 'The Nai Harn',
    image: require('../../assets/images/hotels/phuket-2.jpeg'),
    location: 'Thailand, Phuket',
    rating: 9.4,
    pricePeerDay: 'R430',
  },
  9: {
    id: 9,
    title: 'Hotel Poseidon',
    image: require('../../assets/images/hotels/ac-1.jpeg'),
    location: 'Italy, Amalfi Coast',
    rating: 9.2,
    pricePeerDay: 'R330',
  },
  10: {
    id: 10,
    title: 'Le Agavi Hotel',
    image: require('../../assets/images/hotels/ac-2.jpeg'),
    location: 'Italy, Amalfi Coast',
    rating: 9.4,
    pricePeerDay: 'R350',
  },
  11: {
    id: 11,
    title: 'Hotel Casa 1800 Granada',
    image: require('../../assets/images/hotels/granada-1.jpeg'),
    location: 'Spain, Granada',
    rating: 9.2,
    pricePeerDay: 'R230',
  },
  12: {
    id: 12,
    title: 'Parador de Granada',
    image: require('../../assets/images/hotels/granada-2.jpeg'),
    location: 'Spain, Granada',
    rating: 9.4,
    pricePeerDay: 'R120',
  },

  13: {
    id: 13,
    title: 'Konansou',
    image: require('../../assets/images/hotels/cb-1.jpeg'),
    location: 'Japan, Cherry blossoms',
    rating: 9.2,
    pricePeerDay: 'R740',
  },
  14: {
    id: 14,
    title: 'Shuhokaku Kogetsu',
    image: require('../../assets/images/hotels/cb-2.jpeg'),
    location: 'Japan, Cherry blossoms',
    rating: 9.4,
    pricePeerDay: 'R240',
  },
};

export const TOP_PLACES = [
  {
    id: 1,
    image: require('../../assets/images/259904617_261906535960531_4924434510662570753_n.jpg'),
    title: 'Cape Town',
    location: 'South Africa',
    description:
      'The ultimate Amalfi Coast travel guide, where to stay, where to eat, and what areas to visit in the Amalfi Coast of Italy. Positano, Ravello, Amalfi and more',
      gallery: [
        require('../../assets/images/259904617_261906535960531_4924434510662570753_n.jpg'),
        require('../../assets/images/eea622430834cb64b900c2f03e5be6b8.jpeg'),
      ],
      rating: 9.0,
      hotels: [HOTELS[13], HOTELS[14]],
  },
  {
    id: 2,
    image: require('../../assets/images/280094007_1382277295568550_6415700435817507697_n.jpg'),
    title: 'Langebaan',
    location: 'South Africa',
    description:
      'Granada is the capital city of the province of Granada, in the autonomous community of Andalusia, Spain',
    gallery: [
      require('../../assets/images/154284535_1874473799383581_1510084266032862214_n.jpg'),
      require('../../assets/images/280094007_1382277295568550_6415700435817507697_n.jpg'),
    ],
    rating: 9.0,
  },
  {
    id: 3,
    image: require('../../assets/images/e57a2a310330ee1d8928eb75d416a53d.jpeg'),
    title: 'Vredenburg',
    location: 'South Africa',
    description:
      "Cherry blossoms usually bloom between mid-March and early May. In 2022, Tokyo's cherry blossom season officially began on March 20",
    gallery: [],
    rating: 9.0,
    },
];

export const PLACES = [
  {
    id: 4,
    image: require('../../assets/images/645d5f28e26c7de2a280f71db15c2141.jpeg'),
    title: 'Cape Town',
    location: 'South Africa',
    description:
      "Cappadocia's landscape includes dramatic expanses of soft volcanic rock, shaped by erosion into towers, cones, valleys, and caves. Rock-cut churches and underground tunnel complexes from the Byzantine and Islamic eras are scattered throughout the countryside.",
    gallery: [
      require('../../assets/images/0e627c12c05e4dd93ab122d618ea7849.jpeg'),
      require('../../assets/images/eea622430834cb64b900c2f03e5be6b8.jpeg'),
      require('../../assets/images/c2dcbb54ca9316831b0f6ed4d4136dda.jpeg'),
    ],
    rating: 9.0,
    },
  {
    id: 5,
    image: require('../../assets/images/eea622430834cb64b900c2f03e5be6b8.jpeg'),
    title: 'Cape Town',
    location: 'South Africa',
    description:
      'Capri is an island of a thousand faces, where visitors can walk the trails skirting the cliffs above the Mediterranean in total solitude, dive into the crystalline waters of its rocky shore, or plunge into the vibrant crowds of the Piazzetta and shop in the most fashionable boutiques in the world.',
    gallery: [],
    rating: 9.0,
    },
  {
    id: 6,
    image: require('../../assets/images/0e627c12c05e4dd93ab122d618ea7849.jpeg'),
    title: 'Cape Town',
    location: 'South Africa',
    description:
      'Learn how you can travel Bora Bora on a budget and how overwater bungalows are possible for cheap plus tips on keeping Bora Bora trip costs low.',
    gallery: [],
    rating: 9.0,
    },
  {
    id: 7,
    image: require('../../assets/images/c2dcbb54ca9316831b0f6ed4d4136dda.jpeg'),
    title: 'Cape Town',
    location: 'South Africa',
    description:
      'Phuket is the largest island in Thailand. It is located in the Andaman Sea in southern Thailand',
    gallery: [],
    rating: 9.0,
    },
];

