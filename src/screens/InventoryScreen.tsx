import { StyleSheet, View } from 'react-native';
import CardList from '../components/CardList';
import { Title } from '../components/Title';
import { RootTabScreenProps } from '../navigation/types';
import { useValuableContext } from '../context/ValuableContext';
import Wrapper from '../components/Wrappers/Wrapper';

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<'Inventory'>) {
  const handleAddButtonPress = () => navigation.navigate('AddItem');
  const { valuables } = useValuableContext();

  return (
    <Wrapper>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
      <View style={styles.cardList}>
        <CardList data={valuables} />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  cardList: {
    marginTop: 15,
  },
});
