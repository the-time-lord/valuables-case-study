import { View } from 'react-native';
import Input from './Input';

const ValuableForm = () => {
  return (
    <View>
      <Input label="Name" placeholder="Bracelet" />
      <Input label="Value" placeholder="700" isNumeric hasCurrency />
      <Input
        label="Description"
        placeholder="Optional"
        multiline
        numberOfLines={20}
      />
    </View>
  );
};

export default ValuableForm;
