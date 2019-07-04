import React from 'react';
import Dropdown from '../Dropdown';
import { Modal, Title, Close, Fieldset } from './style';

const Panel = ({
  activeItemId,
  isPanelOpen,
  hidePanel,
}) => (
  <Modal isOpen={isPanelOpen}>
    <Close onClick={hidePanel}>&times;</Close>
    <Title>#{activeItemId}</Title>
    <Fieldset>
      <legend>Lender</legend>
      Lorem ipsum dolor sit amet.
    </Fieldset>
    <Fieldset>
      <legend>Borrower</legend>
      Lorem ipsum dolor sit amet.
    </Fieldset>
    <Fieldset>
      <legend>Transaction</legend>
      Lorem ipsum dolor sit amet.
    </Fieldset>
    <Dropdown
      expand={true}
      defaultValue="none">
      <option value="none" disabled>Status</option>
      <option value="fromDate">Date</option>
      <option value="status">Status</option>
    </Dropdown>
  </Modal>
);

export default Panel;
