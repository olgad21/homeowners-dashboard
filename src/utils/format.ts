const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const EMPTY_VALUE = "-";

export const formatCurrency = (value: number | null | undefined): string =>
  value == null ? EMPTY_VALUE : currencyFormatter.format(Math.round(value));
