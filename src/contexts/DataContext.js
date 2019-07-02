import React, { Component } from 'react';
import TransactionService from '../services/TransactionService';
import UserService from '../services/UserService';
import { objectExpression } from '@babel/types';

const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    page: 0,
    data: [],
  };

  componentDidMount () {
    this.loadTransactions();
  }

  loadTransactions = async () => {
    let { page } = this.state;

    try {
      const data = await TransactionService.getTransactionsByPageNo(++page);

      this.setState(prevState => ({
        page,
        data: [...prevState.data, ...data],
      }));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <DataContext.Provider
        value={{
          data: this.state.data,
          loadTransactions: this.loadTransactions
        }}>
        {children}
      </DataContext.Provider>
    );
  }
}

export const DataConsumer = DataContext.Consumer;
