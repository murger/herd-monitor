import React, { Component } from 'react';
import TransactionService from '../services/TransactionService';
import UserService from '../services/UserService';

const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    page: 0,
    data: [],
    error: false,
    loading: true,
  };

  componentDidMount () {
    this.fetchTransactions();
  }

  fetchTransactions = async () => {
    let { page } = this.state;

    this.setState({ loading: true });

    try {
      const data = await TransactionService.getTransactionsByPageNo(++page);

      this.setState(prevState => ({
        page,
        data: [...prevState.data, ...data],
        loading: false,
      }));
    } catch (error) {
      this.setState({
        error: true,
        loading: false,
      }, () => setTimeout(this.resetError, 3500));
    }
  };

  resetError = () => {
    this.setState({ error: false });
  };

  render () {
    const { children } = this.props;
    const { data, loading, error } = this.state;
    const { fetchTransactions } = this;

    return (
      <DataContext.Provider
        value={{
          data,
          error,
          loading,
          fetchTransactions,
        }}>
        {children}
      </DataContext.Provider>
    );
  }
}

export const DataConsumer = DataContext.Consumer;
