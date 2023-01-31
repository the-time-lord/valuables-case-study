import { StyleSheet, View, Text } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';
import { RootTabScreenProps } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { fonts } from '../theme/fonts';

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<'AddItemScreen'>) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled onPress={() => undefined} />
      </View>
      <View style={styles.photoContainer}>
        <Ionicons name="camera" color={colors.mainBlue} size={44} />
        <Text style={styles.photoText}>Add photo</Text>
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
  photoContainer: {
    borderRadius: 100,
    borderColor: colors.lightGrey,
    borderWidth: 2,
    borderStyle: 'dashed',
    height: 135,
    width: 135,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 15,
  },
  photoText: {
    fontFamily: fonts.bold,
    fontSize: 17,
  },
});
