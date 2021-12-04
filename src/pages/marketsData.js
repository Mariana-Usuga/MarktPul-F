const marketsData = [
  {
    id: '1',
    title: 'Mercado 1',
    description:
      'Vende tus productos en este mercado y invierte una platica extra',
    image:
      'https://i.pinimg.com/564x/dd/9f/8c/dd9f8ccb9b80d71a8958887b48d96381.jpg',
    place: 'Calle 72#36-08',
    organizer: 'Jose Carlos',
  },
  {
    id: '2',
    title: 'Mercado 2',
    description:
      'Vende tus productos en este mercado y invierte una platica extra',
    image:
      'https://i.pinimg.com/564x/dd/9f/8c/dd9f8ccb9b80d71a8958887b48d96381.jpg',
    place: 'Calle 72#36-08',
    organizer: 'Mariana Usuga',
  },
  {
    id: '3',
    title: 'Mercado 3',
    description:
      'Vende tus productos en este mercado y invierte una platica extra',
    image:
      'https://i.pinimg.com/564x/dd/9f/8c/dd9f8ccb9b80d71a8958887b48d96381.jpg',
    place: 'Calle 72#36-08',
    organizer: 'Brayan Mansano',
  },
  {
    id: '4',
    title: 'Mercado 4',
    description:
      'Vende tus productos en este mercado y invierte una platica extra',
    image:
      'https://i.pinimg.com/564x/dd/9f/8c/dd9f8ccb9b80d71a8958887b48d96381.jpg',
    place: 'Calle 72#36-08',
    organizer: 'Jorge',
  },
  {
    id: '5',
    title: 'Mercado 5',
    description:
      'Vende tus productos en este mercado y invierte una platica extra',
    image:
      'https://i.pinimg.com/564x/dd/9f/8c/dd9f8ccb9b80d71a8958887b48d96381.jpg',
    place: 'Fisico: Calle 72#36-08',
    organizer: 'Jose Carlos',
  },
  {
    id: '6',
    title: 'Mercado 6',
    description:
      'Vende tus productos en este mercado y invierte una platica extra',
    image:
      'https://i.pinimg.com/564x/dd/9f/8c/dd9f8ccb9b80d71a8958887b48d96381.jpg',
    place: 'Calle 72#36-08',
    organizer: 'Mariana Usuga',
  },
  {
    id: '7',
    title: 'Mercado 7',
    description:
      'Vende tus productos en este mercado y invierte una platica extra',
    image:
      'https://i.pinimg.com/564x/dd/9f/8c/dd9f8ccb9b80d71a8958887b48d96381.jpg',
    place: 'Calle 72#36-08',
    organizer: 'Mariana Usuga',
  },
];

export default {};

export function getMarkets() {
  return marketsData;
}

export function getMarket(id) {
  return marketsData.find((market) => market.id === id);
}
