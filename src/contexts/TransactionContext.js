import React, { Component } from 'react';
import TransactionService from '../services/TransactionService';

const TransactionContext = React.createContext();

export class TransactionProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount () {
		TransactionService.getTransactionsByPageNo().then(data => {
			this.setState({ data, loading: false });
		});
  }

  render() {
    const { children } = this.props;

    return (
      <TransactionContext.Provider value={this.state}>
        {children}
      </TransactionContext.Provider>
    );
  }
}

export const TransactionConsumer = TransactionContext.Consumer;
