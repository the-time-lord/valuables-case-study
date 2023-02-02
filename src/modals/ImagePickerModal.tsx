import { View, StyleSheet, Modal } from 'react-native';
import { colors } from '../theme/colors';
import { ImagePicker, ImagePickerResult } from '../sdk/ImagePicker';
import { ModalButton } from './components/ModalButton';

const Divider = () => {
  return <View style={dividerStyles.divider}></View>;
};

interface Props {
  isVisible: boolean;
  onClose: () => void;
  setImageURI: React.Dispatch<React.SetStateAction<string>>;
}

const ImagePickerModal = ({ isVisible, onClose, setImageURI }: Props) => {
  const { takePhoto, pickImage } = ImagePicker;

  const setImage = async (callback: () => Promise<ImagePickerResult>) => {
    try {
      const result = await callback();
      if (!result?.canceled) {
        setImageURI(result?.assets[0]?.uri);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
      transparent={true}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <ModalButton
            text="Select from Library"
            onPress={() => setImage(pickImage)}
          />
          <Divider />
          <ModalButton
            text="Take a photo"
            onPress={() => setImage(takePhoto)}
          />
          <Divider />
          <ModalButton text="Cancel" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const dividerStyles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: colors.lightGrey,
  },
});

const styles = StyleSheet.create({
  container: {
    height: '25%',
    marginTop: 'auto',
    width: '100%',
    backgroundColor: colors.background,
    shadowOpacity: 0.2,
    shadowColor: colors.secondaryGrey,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: -5 },
    shadowBlur: 2,
    borderRadius: 20,
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default ImagePickerModal;
