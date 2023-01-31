import { StyleSheet, View } from 'react-native';

import Button from '../components/Button';
import { Input } from '../components/Input';
import { RootTabScreenProps } from '../navigation/types';
import { colors } from '../theme/colors';

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<'AddItemScreen'>) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled onPress={() => undefined} />
      </View>
      <View>
        <Input label="Name" placeholder="Bracelet" />
        <Input label="Value" placeholder="700" isNumeric hasCurrency />
        <Input
          label="Description"
          placeholder="Optional"
          multiline
          numberOfLines={20}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
});
