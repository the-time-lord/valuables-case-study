import { MAX_VALUABLE_TOTAL } from '../constants/valuable';

export const isAboveMaxValuableTotal = (totalValue: number, value: number) =>
  totalValue + value > MAX_VALUABLE_TOTAL;
