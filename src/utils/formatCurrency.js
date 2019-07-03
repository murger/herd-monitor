const formatter = (currency) => (
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
  })
);

export default (amount, currency) => formatter(currency).format(amount);
