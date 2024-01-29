const getCurrencySymbol = (currencyCode: string | undefined | null): string => {
  if (!currencyCode) return "€";
  switch (currencyCode) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "JPY":
      return "¥";
    default:
      return "$";
  }
};

export default getCurrencySymbol;
