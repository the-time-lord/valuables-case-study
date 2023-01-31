export const formatCurrency = (value: number): string => {
  return `€${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};
