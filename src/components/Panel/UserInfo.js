import React from 'react';
import { User } from './style';
import formatCurrency from '../../utils/formatCurrency';

const UserInfo = ({ data = {} }) => {
  if (data.loading) {
    return <span>...</span>;
  } else if (data.error) {
    return <span>Oops...</span>;
  }

  return (
    <User>
      <strong>{data.firstName} {data.lastName}</strong>
      <span>{data.email}</span>
      <span>{data.telephone}</span>
      <i>{formatCurrency(data.credit)}</i>
    </User>
  );
};

export default UserInfo;
