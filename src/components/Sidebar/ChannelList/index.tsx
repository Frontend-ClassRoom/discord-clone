import { FC, useState } from 'react';
import { ChannelListItem } from './Styled';
import { Delete, Edit } from '@material-ui/icons';

interface Props {
  id: string;
  channel: string;
  handleChangeChannel: (channelId: string, channelName: string) => void;
  handleDeleteChannel: (channelId: string) => void;
  handleChangeNameChannel: (channelId: string) => void;
}

const ChannelList: FC<Props> = ({
  id,
  channel,
  handleChangeChannel,
  handleDeleteChannel,
  handleChangeNameChannel,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <ChannelListItem.Panel
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ChannelListItem.Title onClick={() => handleChangeChannel(id, channel)}>
        <ChannelListItem.Hash>#</ChannelListItem.Hash>
        {channel}
      </ChannelListItem.Title>
      <ChannelListItem.Icons hovered={hovered}>
        <Edit onClick={() => handleChangeNameChannel(id)} />
        <Delete onClick={() => handleDeleteChannel(id)} />
      </ChannelListItem.Icons>
    </ChannelListItem.Panel>
  );
};

export default ChannelList;
