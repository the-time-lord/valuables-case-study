import { useState } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TextInputProps,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { fonts } from '../theme/fonts';
import { colors } from '../theme/colors';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  label?: string;
  hasCurrency?: boolean;
  isNumeric?: boolean;
}

const Input = ({
  label,
  hasCurrency = false,
  multiline = false,
  maxLength,
  numberOfLines,
  placeholder,
  isNumeric,
}: Props & TextInputProps) => {
  const [value, setValue] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={[styles.inputContainer, multiline && styles.multiline]}>
          <TextInput
            value={value}
            onChangeText={setValue}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={colors.mainGrey}
            onSubmitEditing={Keyboard.dismiss}
            style={styles.input}
            numberOfLines={numberOfLines}
            keyboardType={isNumeric ? 'numeric' : 'default'}
          />
          {hasCurrency ? (
            <MaterialIcons name="euro" size={17} color={colors.mainGrey} />
          ) : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderColor: colors.lightGrey,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: 13,
    marginVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 17,
  },
  multiline: {
    paddingBottom: 87,
  },
});

export default Input;
