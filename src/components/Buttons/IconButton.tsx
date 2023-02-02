import { Ionicons } from '@expo/vector-icons';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface Props {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
}

const IconButton = ({
  onPress,
  iconName,
  iconColor,
  iconSize,
  buttonStyle,
}: PressableProps & Props) => {
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      <Ionicons name={iconName as GLYPHS} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 75,
  },
});

export default IconButton;
