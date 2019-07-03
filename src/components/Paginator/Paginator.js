import React from 'react';
import { ServiceConsumer } from '../../contexts/ServiceContext';
import Button from '../Button';
import { Wrapper, Notice, Error } from './style';

const Paginator = () => (
  <Wrapper>
    <ServiceConsumer>
      {({ fetchTransactions, loading, error }) => {
        if (loading) {
          return <Notice>Loading...</Notice>;
        } else if (error) {
          return <Error>An error occurred 🤔</Error>;
        }

        return (
          <Button onClick={fetchTransactions}>
						Load more
          </Button>
        );
      }}
    </ServiceConsumer>
  </Wrapper>
);

export default Paginator;
