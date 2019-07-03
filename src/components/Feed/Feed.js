import React from 'react';
import { ServiceConsumer } from '../../contexts/ServiceContext';
import FeedItem from '../FeedItem';
import { List } from './style';

const Feed = () => (
  <List>
    <ServiceConsumer>
      {({ data }) =>
        data.map((item, index) =>
          <FeedItem key={index} item={item} />
        )
      }
    </ServiceConsumer>
  </List>
);

export default Feed;
