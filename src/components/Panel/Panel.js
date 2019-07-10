import React, { PureComponent, Fragment } from 'react';
import { withTheme } from 'styled-components';
import { format, differenceInCalendarDays } from 'date-fns';
import { ServiceContext, ServiceConsumer } from '../../contexts/ServiceContext';
import Dropdown from '../Dropdown';
import UserInfo from './UserInfo';
import { Modal, Title, Close, Fieldset, Date, Price } from './style';
import formatCurrency from '../../utils/formatCurrency';
import statusTypes from '../../translations/statusTypes.json';
import { DATE_FORMAT } from '../../constants';

class Panel extends PureComponent {
  static contextType = ServiceContext;

  state = {
    item: {},
  }

  componentDidUpdate () {
    const { getTransaction, fetchUsers, activeItemId } = this.context;
    const item = getTransaction(activeItemId);

    if (item) {
      this.setState({ item });
      fetchUsers([item.lenderId, item.borrowerId]);
    }
  }

  changeStatus = ({ target: { value } }) => {
    const { activeItemId, updateStatus } = this.context;

    updateStatus(activeItemId, value);
  }

  render () {
    const { theme } = this.props;
    const { item } = this.state;

    return (
      <ServiceConsumer>
        {({ getUser, activeItemId, setActiveItem }) => (
          <Modal isOpen={!!activeItemId}>
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
          </Modal>
        )}
      </ServiceConsumer>
    );
  }
}

export default withTheme(Panel);
