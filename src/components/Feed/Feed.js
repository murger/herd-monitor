import React from 'react';
import { ServiceConsumer } from '../../contexts/ServiceContext';
import FeedItem from './FeedItem';
import { List } from './style';

const Feed = () => (
  <List>
    <ServiceConsumer>
      {({ data, activeItemId, setActiveItem }) =>
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
