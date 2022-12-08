interface LocaleDecimal {
  toLocaleDecimal: (decimals: number) => string;
}

interface Number extends LocaleDecimal {}

Number.prototype.toLocaleDecimal = function (decimals = 0) {
  return this.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
};
