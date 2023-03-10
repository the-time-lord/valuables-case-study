import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AddPhotoButton from '../components/Buttons/AddPhotoButton';

import Button from '../components/Buttons/Button';
import ImagePickerModal from '../modals/ImagePickerModal';
import { RootTabScreenProps } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

import { fonts, fontSizes } from '../theme/fonts';
import IconButton from '../components/Buttons/IconButton';
import { Valuable } from '../types/Valuable';
import { useValuableContext } from '../context/ValuableContext';
import Input from '../components/Input';
import { MAX_VALUABLE_TOTAL } from '../constants/valuable';
import { formatCurrency } from '../utils/formatter';
import { isAboveMaxValuableTotal } from '../utils/valuable';
import Wrapper from '../components/Wrappers/Wrapper';

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<'AddItemScreen'>) {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageURI, setImageURI] = useState('');
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const { valuables, setValuables } = useValuableContext();

  useEffect(() => {
    if (imageURI) {
      setModalVisible(!modalVisible);
    }
  }, [imageURI]);

  const setValuablePrice = (value: string) => {
    if (Number.isNaN(Number(value))) return;

    setValue(value);
  };

  const onSubmit = () => {
    const valuable: Valuable = {
      id: Date.now(),
      name,
      purchasePrice: Number(value),
      photo: imageURI ? { uri: imageURI } : undefined,
    };

    setValuables([...valuables, valuable]);
    navigation.goBack();
  };

  const valuablePriceTotal = valuables.reduce(
    (acc, { purchasePrice }) => acc + purchasePrice,
    0
  );

  const isAboveMaxTotal = isAboveMaxValuableTotal(
    valuablePriceTotal,
    Number(value)
  );

  const isDataValid = !!name && !!value && !isAboveMaxTotal;

  return (
    <Wrapper>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled={!isDataValid} onPress={onSubmit} />
      </View>
      <AddPhotoButton onPress={() => setModalVisible(!modalVisible)}>
        {imageURI ? (
          <>
            <Image source={{ uri: imageURI }} style={styles.image} />
            <IconButton
              iconName="trash"
              iconSize={15}
              iconColor={colors.white}
              buttonStyle={styles.deleteButton}
              onPress={() => setImageURI('')}
            />
          </>
        ) : (
          <>
            <Ionicons name="camera" color={colors.mainBlue} size={44} />
            <Text style={styles.buttonText}>Add photo</Text>
          </>
        )}
      </AddPhotoButton>
      <ImagePickerModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        setImageURI={setImageURI}
      />
      <View>
        <Input
          label="Name"
          placeholder="Bracelet"
          value={name}
          onChangeText={(text: string) => setName(text)}
        />
        <Input
          label="Value"
          placeholder="700"
          isNumeric
          hasCurrency
          value={value}
          onChangeText={(value) => setValuablePrice(value)}
          hasError={isAboveMaxTotal}
          errorMessage={`The total price should be less than ${formatCurrency(
            MAX_VALUABLE_TOTAL
          )}`}
        />
        <Input
          label="Description"
          placeholder="Optional"
          multiline
          numberOfLines={20}
          value={description}
          onChangeText={(text: string) => setDescription(text)}
        />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
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
    fontSize: fontSizes.medium,
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.medium,
  },
  image: {
    height: 135,
    width: 135,
    borderRadius: 75,
  },
  deleteButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.mainRed,
  },
});
