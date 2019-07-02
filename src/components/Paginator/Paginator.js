import React from 'react';
import { DataConsumer } from '../../contexts/DataContext';
import Button from '../Button';
import { Wrapper, Notice } from './style';

const Paginator = () => (
  <Wrapper>
    <DataConsumer>
      {({ fetchTransactions, loading, error }) => {
        if (loading) {
          return <Notice>Loading...</Notice>;
        } else if (error) {
          return <Notice error={true}>That didn't happen 🤔</Notice>;
        }

        return (
          <Button onClick={fetchTransactions}>
						Load more
          </Button>
        );
      }}
    </DataConsumer>
  </Wrapper>
);

export default Paginator;
