import { MAX_VALUABLE_TOTAL } from '../constants/valuable';
import { isAboveMaxValuableTotal } from '../utils/valuable';

describe('Valuables', () => {
  it('cannot have total value above 40,000 euro', () => {
    const valuable1Value = 5000;
    const valuable2Value = 3000;
    const valuable3Value = 6000;
    const valuable4Value = 30000;

    const totalOldValue = valuable1Value + valuable2Value + valuable3Value;

    const totalCurrentValue =
      valuable1Value + valuable2Value + valuable3Value + valuable4Value;

    const isAboveMaxTotal = isAboveMaxValuableTotal(
      totalOldValue,
      valuable4Value.toString()
    );

    expect(totalCurrentValue).toBeGreaterThan(MAX_VALUABLE_TOTAL);
    expect(isAboveMaxTotal).toBe(true);
  });
});
