import React from 'react';
import { ServiceConsumer } from '../../contexts/ServiceContext';
import FeedItem from './FeedItem';
import { List } from './style';

const Feed = ({ activeItemId, setActiveItem }) => (
  <List>
    <ServiceConsumer>
      {({ data }) =>
        data.map((item, index) => (
          <FeedItem
            key={index}
            item={item}
            active={activeItemId === item.id}
            onClick={() => setActiveItem(item.id)} />
        ))
      }
    </ServiceConsumer>
  </List>
);

export default Feed;
