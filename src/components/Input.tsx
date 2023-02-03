import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TextInputProps,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { fonts, fontSizes } from '../theme/fonts';
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
      <View style={styles.container}>
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
              multiline && Platform.OS === 'ios' && styles.multiline,
              isFocused && [styles.inputFocused, styles.shadow],
              hasError && [styles.error, styles.shadow],
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
              color={colors.secondaryGrey}
              style={styles.icon}
              pointerEvents="none"
            />
          ) : null}
        </View>
        {hasError ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.small,
    marginVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: fontSizes.medium,
    borderColor: colors.lightGrey,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
  },
  inputFocused: {
    borderColor: colors.mainBlue,
    shadowColor: colors.mainBlue,
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
    shadowColor: colors.mainRed,
  },
  errorMessage: {
    color: colors.mainRed,
    fontFamily: fonts.regular,
    fontSize: 13,
    marginTop: 10,
  },
  shadow: {
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
  },
});

export default Input;
