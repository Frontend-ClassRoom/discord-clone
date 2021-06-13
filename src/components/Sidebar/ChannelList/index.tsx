import { FC } from 'react';
import { ChannelListItem } from './Styled';

interface Props {
  id: string;
  channel: string;
  handleChangeChannel: (id: string, channelName: string) => void;
}

const ChannelList: FC<Props> = ({ id, channel, handleChangeChannel }) => {
  return (
    <ChannelListItem.Panel>
      <ChannelListItem.Title onClick={() => handleChangeChannel(id, channel)}>
        <ChannelListItem.Hash>#</ChannelListItem.Hash>
        {channel}
      </ChannelListItem.Title>
    </ChannelListItem.Panel>
  );
};

export default ChannelList;
