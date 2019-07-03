import React from 'react';
import { Modal, Title, Close } from './style';

const Panel = ({ itemId, isOpen, hidePanel }) => (
  <Modal isOpen={isOpen}>
    <Close onClick={hidePanel}>&times;</Close>
    <Title>#{itemId}</Title>
  </Modal>
);

export default Panel;
