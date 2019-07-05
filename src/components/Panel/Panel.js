import React, { Component, Fragment } from 'react';
import { withTheme } from 'styled-components';
import { format, differenceInCalendarDays } from 'date-fns';
import { ServiceContext, ServiceConsumer } from '../../contexts/ServiceContext';
import Dropdown from '../Dropdown';
import { Modal, Title, Close, Fieldset, User, Date, Price } from './style';
import formatCurrency from '../../utils/formatCurrency';
import statusTypes from '../../translations/statusTypes.json';

class Panel extends Component {
  static contextType = ServiceContext;

  componentDidUpdate () {
    const { activeItemId } = this.props;
    const { getTransaction, fetchUsers } = this.context;
    const item = getTransaction(activeItemId);

    if (item) {
      fetchUsers([item.lenderId, item.borrowerId]);
    }
  }

  changeStatus = ({ target: { value } }) => {
    const { activeItemId } = this.props;
    const { postStatus } = this.context;

    // TODO: loading state
    postStatus(activeItemId, value);
  };

  // This sub-render can be made into a component
  renderUser = (user = {}) => {
    if (user.loading) {
      return <span>...</span>;
    } else if (user.error) {
      return <span>Oops...</span>;
    }

    return (
      <Fragment>
        <strong>{user.firstName} {user.lastName}</strong>
        <span>{user.email}</span>
        <span>{user.telephone}</span>
        <i>{formatCurrency(user.credit)}</i>
      </Fragment>
    );
  };

  render () {
    const { activeItemId, isPanelOpen, hidePanel, theme } = this.props;

    return (
      <ServiceConsumer>
        {({ getTransaction, getUser }) => {
          const item = getTransaction(activeItemId);
          const lender = item && getUser(item.lenderId);
          const borrower = item && getUser(item.borrowerId);

          return (
            <Modal isOpen={isPanelOpen}>
              {item &&
                <Fragment>
                  <Close onClick={hidePanel}>&times;</Close>
                  <Title>#{item.id}</Title>
                  <Fieldset>
                    <legend>Lender</legend>
                    <User>{this.renderUser(lender)}</User>
                  </Fieldset>
                  <Fieldset>
                    <legend>Borrower</legend>
                    <User>{this.renderUser(borrower)}</User>
                  </Fieldset>
                  <Fieldset>
                    <legend>Transaction</legend>
                    <strong>#{item.itemId}</strong>
                    <Date>
                      <i>{format(item.fromDate, "D MMM 'YY")}</i>
                      <i>{format(item.toDate, "D MMM 'YY")}</i>
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
                    expand={true}
                    color={theme.getStatusColour(item.status)}
                    value={item.status}
                    onChange={this.changeStatus}>
                    <option disabled>Status</option>
                    {Object.keys(statusTypes).map((key, index) =>
                      <option key={index} value={key}>{statusTypes[key]}</option>
                    )}
                  </Dropdown>
                </Fragment>
              }
            </Modal>
          );
        }}
      </ServiceConsumer>
    );
  }
}

export default withTheme(Panel);
