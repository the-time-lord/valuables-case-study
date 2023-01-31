import { ImageSourcePropType } from 'react-native';

export interface Valuable {
  id: number;
  name: string;
  purchasePrice: number;
  type?: ValuableType;
  description?: string;
  photo: ImageSourcePropType | undefined;
}

type ValuableType = 'JEWELRY' | 'MUSIC_INSTRUMENT';
