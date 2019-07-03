import React, { Component } from 'react';
import TransactionService from '../services/TransactionService';
import UserService from '../services/UserService';

const ServiceContext = React.createContext();

export class ServiceProvider extends Component {
  state = {
    page: 0,
    data: [],
    error: false,
    loading: true,
  };

  componentDidMount () {
    this.fetchTransactions();
  }

  resetError = () => {
    this.setState({ error: false });
  };

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
      }, () => setTimeout(this.resetError, 1000 * 3.5));
    }
  };

  render () {
    const { children } = this.props;
    const { data, loading, error } = this.state;
    const { fetchTransactions } = this;

    return (
      <ServiceContext.Provider
        value={{
          data,
          error,
          loading,
          fetchTransactions,
        }}>
        {children}
      </ServiceContext.Provider>
    );
  }
}

export const ServiceConsumer = ServiceContext.Consumer;
