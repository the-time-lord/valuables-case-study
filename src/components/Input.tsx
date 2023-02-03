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
import { useState } from 'react';

interface Props {
  label?: string;
  hasCurrency?: boolean;
  isNumeric?: boolean;
  value: string;
  hasError?: boolean;
  errorMessage?: string;
}

const Input = ({
  label,
  hasCurrency = false,
  multiline = false,
  maxLength,
  numberOfLines,
  placeholder,
  isNumeric,
  value,
  onChangeText,
  hasError,
  errorMessage,
}: Props & TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={colors.mainGrey}
            onSubmitEditing={Keyboard.dismiss}
            style={[
              styles.input,
              hasCurrency && styles.inputWithIcon,
              multiline && styles.multiline,
              isFocused && styles.inputFocused,
              hasError && styles.error,
            ]}
            numberOfLines={numberOfLines}
            keyboardType={isNumeric ? 'numeric' : 'default'}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {hasCurrency ? (
            <MaterialIcons
              name="euro"
              size={17}
              color={colors.mainGrey}
              style={styles.icon}
            />
          ) : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: 13,
    marginVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 17,
    borderColor: colors.lightGrey,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 20,
  },
  inputFocused: {
    borderColor: colors.mainBlue,
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  inputWithIcon: {
    paddingRight: 27,
  },
  multiline: {
    paddingTop: 14,
    paddingBottom: 87,
  },
  error: {
    borderColor: colors.mainRed,
  },
  errorMessage: {
    color: colors.mainRed,
    fontSize: 13,
  },
});

export default Input;
