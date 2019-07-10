import React, { useContext, useMemo } from 'react';
import { ServiceContext } from '../../contexts/ServiceContext';
import Button from '../Button';
import { Wrapper, Notice, Error } from './style';

const Paginator = () => {
  const { fetchTransactions, loading, error } = useContext(ServiceContext);
  const wrap = (content) => <Wrapper>{content}</Wrapper>;

  return useMemo(() => {
    if (loading) {
      return wrap(<Notice>Loading...</Notice>);
    } else if (error) {
      return wrap(<Error>An error occurred 🤔</Error>);
    }

    return wrap(
      <Button onClick={fetchTransactions}>
        Load more
      </Button>
    );
  }, [fetchTransactions, loading, error]);
};

export default Paginator;
