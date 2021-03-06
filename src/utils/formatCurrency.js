import { DEFAULT_CURRENCY } from '../constants';

const formatter = (currency) => (
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
  })
);

export default (amount, currency = DEFAULT_CURRENCY) =>
  formatter(currency).format(amount);
