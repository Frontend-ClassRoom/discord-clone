import React, { FC } from 'react';
import { ChannelListItem } from './Styled';

interface Props {
  id: number;
  channel: string;
}

const ChannelList: FC<Props> = ({ id, channel }) => {
  return (
    <ChannelListItem.Panel>
      <ChannelListItem.Title>
        <ChannelListItem.Hash>#</ChannelListItem.Hash>
        Sidebar
      </ChannelListItem.Title>
    </ChannelListItem.Panel>
  );
};

export default ChannelList;
