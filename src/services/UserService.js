import { API_HOST } from '../constants';

class UserService {
  async getUserById (id) {
    const url = [API_HOST, 'user', id].join('/');
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}

export default new UserService();
