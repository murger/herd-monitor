import React, { Component } from 'react';
import { getUserById } from '../services/UserService';
import {
  getTransactionsByPageNo,
  updateTransactionById,
} from '../services/TransactionService';

export const ServiceContext = React.createContext();
export const ServiceConsumer = ServiceContext.Consumer;

export class ServiceProvider extends Component {
  state = {
    page: 0,
    data: [],
    users: [],
    error: false,
    loading: true,
    sort: null,
  }

  componentDidMount () {
    this.fetchTransactions();
  }

  resetError = () => {
    this.setState({ error: false });
  }

  fetchTransactions = async () => {
    let { page } = this.state;

    this.setState({ loading: true });

    try {
      const data = await getTransactionsByPageNo(++page);

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
  }

  sortTransactions = (field) => {
    const { data, sort } = this.state;
    const key = field || sort;
    const criteria = {
      fromDate: (a, b) => new Date(a[key]) - new Date(b[key]),
      status: (a, b) => a[key].localeCompare(b[key]),
    };

    if (key) {
      this.setState({
        sort: key,
        data: data.sort(criteria[key]),
      });
    }
  }

  getTransaction = (id) => {
    const { data } = this.state;

    return data.find(item => item.id === id);
  }

  fetchUsers = (users) => {
    users.forEach(id => this.fetchUser(id));
  }

  fetchUser = async (id) => {
    const { users } = this.state;
    const idx = users.findIndex(item => item.id === id);
    const index = (idx < 0) ? users.length : idx;
    const user = this.getUser(id);

    if (!user || user.error) {
      await this.setUser(index, { id, loading: true });
    } else if (user) {
      return;
    }

    try {
      const data = await getUserById(id);

      await this.setUser(index, Object.assign(data, { id }));
    } catch (error) {
      await this.setUser(index, { id, error: true });
    }
  }

  setUser = async (index, data) => {
    const { users } = this.state;

    users.splice(index, 1, data);
    await this.setState({ users });
  }

  getUser = (id) => {
    const { users } = this.state;

    return users.find(item => item.id === id);
  }

  updateStatus = async (id, value) => {
    const { data } = this.state;
    const index = data.findIndex(item => item.id === id);

    try {
      // TODO: loading state
      await updateTransactionById(id, { status: value });

      data[index].status = value;
      await this.setState({ data });
    } catch (error) {
      // TODO: inform the user
    }
  }

  render () {
    const { children } = this.props;
    const { data, loading, error } = this.state;
    const {
      fetchTransactions,
      sortTransactions,
      getTransaction,
      fetchUsers,
      getUser,
      updateStatus,
    } = this;

    return (
      <ServiceContext.Provider
        value={{
          data,
          error,
          loading,
          fetchTransactions,
          sortTransactions,
          getTransaction,
          fetchUsers,
          getUser,
          updateStatus,
        }}>
        {children}
      </ServiceContext.Provider>
    );
  }
}
