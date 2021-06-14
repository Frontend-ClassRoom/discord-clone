import { FC } from 'react';
import { ChannelListItem } from './Styled';
import { Delete, Edit } from '@material-ui/icons';

interface Props {
  id: string;
  channel: string;
  handleChangeChannel: (channelId: string, channelName: string) => void;
  handleDeleteChannel: (channelId: string) => void;
  handleChangeNameChannel: (channelId: string, channelName: string) => void;
}

const ChannelList: FC<Props> = ({
  id,
  channel,
  handleChangeChannel,
  handleDeleteChannel,
  handleChangeNameChannel,
}) => {
  return (
    <ChannelListItem.Panel>
      <ChannelListItem.Title onClick={() => handleChangeChannel(id, channel)}>
        <ChannelListItem.Hash>#</ChannelListItem.Hash>
        {channel}
      </ChannelListItem.Title>
      <ChannelListItem.Icons className="channel-icons">
        <Edit onClick={() => handleChangeNameChannel(id, channel)} />
        <Delete onClick={() => handleDeleteChannel(id)} />
      </ChannelListItem.Icons>
    </ChannelListItem.Panel>
  );
};

export default ChannelList;
