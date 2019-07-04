import { API_HOST } from '../constants';

export const getTransactionsByPageNo = async (page) => {
  const url = [API_HOST, 'transactions', page || 1].join('/');
  const response = await fetch(url);
  const json = await response.json();

  return json;
};

export const updateTransactionById = async (id, data) => {
  const url = [API_HOST, 'transaction', id].join('/');
  const body = JSON.stringify(data);
  const response = await fetch(url, { method: 'PUT', body });
  const json = await response.json();

  return json;
};
