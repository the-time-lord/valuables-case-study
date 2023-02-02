import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

interface Props {
  onPress: () => void;
  text: string;
}
export const ModalButton = ({ onPress, text }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.pickerOption}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pickerOption: {
    paddingVertical: 20,
  },
  text: {
    color: colors.mainBlue,
    fontFamily: fonts.regular,
    fontSize: 19,
  },
});
