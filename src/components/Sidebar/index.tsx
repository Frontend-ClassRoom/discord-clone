import React, { FC, useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { ExpandMore } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/reducer/userSlice';
import db, { auth } from 'utils/firebase';
import { Channel } from 'types/Channel';
import ChannelList from './ChannelList';
import Voice from './Voice';
import Profile from './Profile';
import { StyledSidebar, SidebarTop, SidebarChannel } from './Styled';
import { setChannelInfo } from 'store/reducer/appSlice';

const Sidebar: FC = () => {
  const userState = useSelector(selectUser);
  const dispatch = useDispatch();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const channel = db.collection('channels');
    const getChannel = channel.onSnapshot((snapshot) => {
      if (!snapshot || !snapshot.docs) return;
      const docs: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        channel: doc.data(),
      }));

      if (docs) {
        setChannels(docs);
      }
    });

    return () => getChannel();
  }, []);

  const SignOut = () => {
    auth.signOut();
  };

  const handleAddChannels = () => {
    const channelName = prompt('Enter a new Channel name');
    if (channelName !== '' && channelName !== undefined) {
      db.collection('channels').add({
        channelName: channelName,
      });
    }
  };

  const handleDeleteChannel = (channelId: string) => {
    if (!channelId) return;
    db.collection('channels').doc(channelId).delete();
  };

  const handleChangeNameChannel = (channelId: string) => {
    const channelName = prompt('Enter a Update Channel Name');
    if (channelName !== '' && channelName !== undefined) {
      db.collection('channels').doc(channelId).update({
        channelName: channelName,
      });
    }
  };

  const handleChangeChannel = (id: string, channelName: string) => {
    if (!id || !channelName) return;
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );
  };

  return (
    <StyledSidebar>
      <SidebarTop.Panel>
        <SidebarTop.Title>Clever Programmer</SidebarTop.Title>
        <ExpandMore />
      </SidebarTop.Panel>
      <SidebarChannel.Panel>
        {/*  */}
        <SidebarChannel.ChannelHeader>
          <SidebarChannel.SidebarHeader>
            <ExpandMore />
            <SidebarChannel.SidebarChannelTitle>
              Text Channel
            </SidebarChannel.SidebarChannelTitle>
          </SidebarChannel.SidebarHeader>
          <AddIcon onClick={handleAddChannels} style={{ cursor: 'pointer' }} />
        </SidebarChannel.ChannelHeader>
        {/*  */}

        {/*  */}
        <SidebarChannel.ChannelList>
          {channels.map(({ id, channel }: Channel) => (
            <ChannelList
              key={id}
              id={id}
              channel={channel.channelName}
              handleChangeChannel={handleChangeChannel}
              handleDeleteChannel={handleDeleteChannel}
              handleChangeNameChannel={handleChangeNameChannel}
            />
          ))}
        </SidebarChannel.ChannelList>
        {/*  */}
      </SidebarChannel.Panel>
      {/*  */}
      <Voice />
      {/*  */}
      <Profile userState={userState} SignOut={SignOut} />
      {/*  */}
    </StyledSidebar>
  );
};

export default Sidebar;
