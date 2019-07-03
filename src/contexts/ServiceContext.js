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
    sort: null,
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

      // Mix new data and re-sort
      this.setState(prevState => ({
        page,
        data: [...prevState.data, ...data],
        loading: false,
      }), this.sortTransactions);
    } catch (error) {
      // Error for a while
      this.setState({
        error: true,
        loading: false,
      }, () => setTimeout(this.resetError, 1000 * 3.5));
    }
  };

  sortTransactions = (field) => {
    const { data, sort } = this.state;
    const key = field || sort;
    const criterion = {
      fromDate: (a, b) => new Date(a[key]) - new Date(b[key]),
      status: (a, b) => a[key].localeCompare(b[key]),
    };

    if (key) {
      this.setState({
        sort: key,
        data: data.sort(criterion[key]),
      });
    }
  };

  render () {
    const { children } = this.props;
    const { data, loading, error } = this.state;
    const { fetchTransactions, sortTransactions } = this;

    return (
      <ServiceContext.Provider
        value={{
          data,
          error,
          loading,
          fetchTransactions,
          sortTransactions,
        }}>
        {children}
      </ServiceContext.Provider>
    );
  }
}

export const ServiceConsumer = ServiceContext.Consumer;
