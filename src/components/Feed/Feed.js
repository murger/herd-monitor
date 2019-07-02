import React from 'react';
import { DataConsumer } from '../../contexts/DataContext';
import FeedItem from '../FeedItem';
import { List } from './style';

const Feed = () => {
  return (
    <List>
      <DataConsumer>
        {({ data }) =>
          data.map((item, index) =>
            <FeedItem key={index} data={item} />
          )
        }
      </DataConsumer>
    </List>
  );
};

export default Feed;
