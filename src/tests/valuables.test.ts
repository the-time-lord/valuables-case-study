import { MAX_VALUABLE_TOTAL } from '../constants/valuable';
import { isAboveMaxValuableTotal } from '../utils/valuable';

describe('Valuables', () => {
  it('cannot have total value above 40,000 euro', () => {
    const totalCurrentValue = 10700;
    const newValue = 30000;

    const isAboveMaxTotal = isAboveMaxValuableTotal(
      totalCurrentValue,
      newValue
    );

    expect(isAboveMaxTotal).toBe(true);
  });

  it('accepts total value below 40,000 euro', () => {
    const totalCurrentValue = 10700;
    const newValue = 10000;

    const isAboveMaxTotal = isAboveMaxValuableTotal(
      totalCurrentValue,
      newValue
    );

    expect(isAboveMaxTotal).toBe(false);
  });

  it('accepts total value of 40,000 euro', () => {
    const totalCurrentValue = 30000;
    const newValue = 10000;

    const isAboveMaxTotal = isAboveMaxValuableTotal(
      totalCurrentValue,
      newValue
    );

    expect(isAboveMaxTotal).toBe(false);
  });
});
