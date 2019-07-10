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
    activeItemId: null,
  }

  setActiveItem = (id) => {
    this.setState({ activeItemId: id });
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
    const user = this.getUser(id);

    if (!user || user.error) {
      await this.setUser(id, { loading: true });
    } else if (user) {
      return;
    }

    try {
      const data = await getUserById(id);

      await this.setUser(id, data);
    } catch (error) {
      await this.setUser(id, { error: true });
    }
  }

  setUser = async (id, data) => {
    const { users } = this.state;
    const i = users.findIndex(item => item.id === id);
    const index = (i < 0) ? users.length : i;

    users.splice(index, 1, { id, ...data });
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
    const { data, loading, error, activeItemId } = this.state;
    const {
      fetchTransactions,
      sortTransactions,
      getTransaction,
      fetchUsers,
      getUser,
      updateStatus,
      setActiveItem,
    } = this;

    return (
      <ServiceContext.Provider
        value={{
          data,
          error,
          loading,
          activeItemId,
          fetchTransactions,
          sortTransactions,
          getTransaction,
          fetchUsers,
          getUser,
          updateStatus,
          setActiveItem,
        }}>
        {children}
      </ServiceContext.Provider>
    );
  }
}
