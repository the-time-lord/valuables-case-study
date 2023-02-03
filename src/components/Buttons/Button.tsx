import { Pressable, PressableProps, Text } from 'react-native';
import { colors } from '../../theme/colors';
import { fontSizes } from '../../theme/fonts';

export default function Button({
  title,
  onPress,
  disabled,
}: PressableProps & { title: string }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      pressRetentionOffset={20}
      hitSlop={20}
    >
      <Text
        style={{
          fontSize: fontSizes.medium,
          color: disabled ? colors.mainGrey : colors.mainBlue,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
