export const formatPrice = ({
  amount = 0,
  locale = "en-us",
  currency = "EUR",
}) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};
