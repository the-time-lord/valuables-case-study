import { ReactElement } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from 'react-native';

import { colors } from '../../theme/colors';

const AddPhotoButton = (props: TouchableOpacityProps & ReactElement) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>{props.children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default AddPhotoButton;
