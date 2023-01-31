import { StyleSheet, View } from 'react-native';
import CardList from '../components/CardList';
import { Title } from '../components/Title';
import { RootTabScreenProps } from '../navigation/types';
import { colors } from '../theme/colors';
import { valuablesList } from '../utils/valuablesList';

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<'Inventory'>) {
  const handleAddButtonPress = () => navigation.navigate('AddItem');

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
      <View style={styles.cardList}>
        <CardList data={valuablesList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  cardList: {
    marginTop: 15,
  },
});
