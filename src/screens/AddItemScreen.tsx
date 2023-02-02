import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AddPhotoButton from '../components/Buttons/AddPhotoButton';

import Button from '../components/Buttons/Button';
import ImagePickerModal from '../modals/ImagePickerModal';
import { RootTabScreenProps } from '../navigation/types';
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

import { fonts } from '../theme/fonts';
import IconButton from '../components/Buttons/IconButton';
import ValuableForm from '../components/ValuableForm';

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<'AddItemScreen'>) {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageURI, setImageURI] = useState('');

  useEffect(() => {
    if (imageURI) {
      setModalVisible(!modalVisible);
    }
  }, [imageURI]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled onPress={() => undefined} />
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
      <ValuableForm />
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
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 17,
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
