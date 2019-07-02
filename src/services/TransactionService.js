import { API_HOST } from '../constants';

class TransactionService {
  async getTransactionsByPageNo (page) {
    const url = [API_HOST, 'transactions', page || 1].join('/');
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}

export default new TransactionService();
