import { FlatList } from 'react-native';
import { Valuable } from '../types/Valuable';
import ValuableCard from './ValuableCard';

interface Props {
  data: Valuable[];
}

const CardList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ValuableCard
          title={item.name}
          value={item.purchasePrice}
          imageSource={item.photo}
        />
      )}
      horizontal={false}
      numColumns={2}
    ></FlatList>
  );
};

export default CardList;
