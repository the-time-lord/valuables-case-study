import { MAX_VALUABLE_TOTAL } from '../constants/valuable';

export const isAboveMaxValuableTotal = (totalValue: number, value: string) =>
  totalValue + Number(value) > MAX_VALUABLE_TOTAL;
