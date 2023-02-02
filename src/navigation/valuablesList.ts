import { ImageSourcePropType } from 'react-native';
import { Valuable } from '../types/Valuable';

export const valuablesList: Valuable[] = [
  {
    id: 1,
    name: 'Cartier ring',
    purchasePrice: 5780,
    type: 'JEWELRY',
    description: 'Gift from my grandfather',
    photo: {
      uri: 'https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg',
    } as ImageSourcePropType,
  },
  {
    id: 2,
    name: 'Guitar',
    purchasePrice: 850,
    type: 'MUSIC_INSTRUMENT',
    photo: {
      uri: 'https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg',
    } as ImageSourcePropType,
  },
];
