import React from 'react';
import { ServiceConsumer } from '../../contexts/ServiceContext';
import FeedItem from '../FeedItem';
import { List } from './style';

const Feed = ({ showPanel, selectedItemId }) => (
  <List>
    <ServiceConsumer>
      {({ data }) =>
        data.map((item, index) => (
          <FeedItem
            key={index}
            item={item}
            active={selectedItemId === item.id}
            onClick={() => showPanel(item.id)} />
        ))
      }
    </ServiceConsumer>
  </List>
);

export default Feed;
