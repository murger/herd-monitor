import { API_HOST } from '../constants';

export const getUserById = async (id) => {
  const url = [API_HOST, 'user', id].join('/');
  const response = await fetch(url);
  const json = await response.json();

  return json;
};
