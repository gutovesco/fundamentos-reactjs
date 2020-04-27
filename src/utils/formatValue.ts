const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 2 }).format(value); // TODO

export default formatValue;
