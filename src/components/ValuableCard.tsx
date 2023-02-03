import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import { fonts, fontSizes } from '../theme/fonts';
import { colors } from '../theme/colors';
import { formatCurrency } from '../utils/formatter';

interface Props {
  title: string;
  value: number;
  imageSource?: ImageSourcePropType | undefined;
}

const ValuableCard = ({ title, value, imageSource }: Props) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      {imageSource ? (
        <Image source={imageSource} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.fallbackImage]}></View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{formatCurrency(value)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    backgroundColor: colors.white,
    width: '47%',
    marginBottom: 20,
    height: 267,
  },
  image: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    width: '100%',
    aspectRatio: 1,
  },
  fallbackImage: {
    backgroundColor: colors.secondaryGrey,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.mediumLarge,
  },
  value: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.smallMedium,
    color: colors.secondaryGrey,
  },
  textContainer: {
    marginHorizontal: 20,
    paddingVertical: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxHeight: 107,
  },
  shadow: {
    shadowColor: colors.mainGrey,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    shadowBlur: 20,
  },
});

export default ValuableCard;
