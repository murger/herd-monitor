import React, { Component, Fragment } from 'react';
import { withTheme } from 'styled-components';
import { format, differenceInCalendarDays } from 'date-fns';
import { ServiceContext, ServiceConsumer } from '../../contexts/ServiceContext';
import Dropdown from '../Dropdown';
import UserInfo from './UserInfo';
import { Modal, Title, Close, Fieldset, Date, Price } from './style';
import formatCurrency from '../../utils/formatCurrency';
import statusTypes from '../../translations/statusTypes.json';
import { DATE_FORMAT } from '../../constants';

class Panel extends Component {
  static contextType = ServiceContext;

  getActiveItem = () => {
    const { activeItemId } = this.props;
    const { getTransaction } = this.context;

    return getTransaction(activeItemId);
  };

  componentDidUpdate () {
    const { fetchUsers } = this.context;
    const item = this.getActiveItem();

    if (item) {
      fetchUsers([item.lenderId, item.borrowerId]);
    }
  }

  changeStatus = ({ target: { value } }) => {
    const { activeItemId } = this.state;
    const { postStatus } = this.context;

    // TODO: loading state
    postStatus(activeItemId, value);
  };

  render () {
    const { setActiveItem, theme } = this.props;
    const item = this.getActiveItem() || {};

    return (
      <ServiceConsumer>
        {({ getUser }) => (
          <Modal isOpen={!!item.id}>
            <Fragment>
              <Close onClick={() => setActiveItem(null)}>&times;</Close>
              <Title>#{item.id}</Title>
              <Fieldset>
                <legend>Lender</legend>
                <UserInfo data={getUser(item.lenderId)} />
              </Fieldset>
              <Fieldset>
                <legend>Borrower</legend>
                <UserInfo data={getUser(item.borrowerId)} />
              </Fieldset>
              <Fieldset>
                <legend>Transaction</legend>
                <strong>#{item.itemId}</strong>
                <Date>
                  <i>{format(item.fromDate, DATE_FORMAT)}</i>
                  <i>{format(item.toDate, DATE_FORMAT)}</i>
                  <span>
                    {differenceInCalendarDays(item.toDate, item.fromDate)}d
                  </span>
                </Date>
                <Price>
                  {formatCurrency(item.price, item.currency)}
                  {item.totalDiscount > 0 &&
                    <Fragment>
                      <del>{formatCurrency(item.totalDiscount, item.currency)}</del>
                      <span>{item.creditUsed > 0 ? 'Credit' : item.promocode}</span>
                    </Fragment>
                  }
                </Price>
              </Fieldset>
              <Dropdown
                expanded
                color={theme.getStatusColour(item.status)}
                value={item.status}
                onChange={this.changeStatus}>
                <option disabled>Status</option>
                {Object.keys(statusTypes).map((key, index) =>
                  <option key={index} value={key}>{statusTypes[key]}</option>
                )}
              </Dropdown>
            </Fragment>
          </Modal>
        )}
      </ServiceConsumer>
    );
  }
}

export default withTheme(Panel);
