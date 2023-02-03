import { View, StyleSheet, ViewProps } from 'react-native';
import { colors } from '../../theme/colors';

const Wrapper = ({ children }: ViewProps) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 20,
    paddingBottom: 140,
    backgroundColor: colors.background,
  },
});

export default Wrapper;
