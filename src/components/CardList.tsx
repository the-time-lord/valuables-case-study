import { FlatList, StyleSheet } from 'react-native';
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
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    minHeight: '100%',
  },
});

export default CardList;
