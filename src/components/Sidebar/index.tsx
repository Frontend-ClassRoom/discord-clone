import { FC, useEffect, useState } from 'react';
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
import { setChannelInfo, selectChannelName } from 'store/reducer/appSlice';

const Sidebar: FC = () => {
  const userState = useSelector(selectUser);
  const channelNameState = useSelector(selectChannelName);
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

  const handleChangeNameChannel = (channelId: string, channelName: string) => {
    const changeChannelName = prompt('Enter a Update Channel Name');
    if (changeChannelName) {
      db.collection('channels').doc(channelId).update({
        channelName: changeChannelName,
      });

      // 수정할 채팅채널에 이미 들어가 있는 경우 Chat Header에 ChannelName도 같이 변경
      if (channelName === channelNameState) {
        dispatch(
          setChannelInfo({
            channelId: channelId,
            channelName: changeChannelName,
          })
        );
      }
    }
  };

  const handleChangeChannel = (channelId: string, channelName: string) => {
    if (!channelId || !channelName) return;
    dispatch(
      setChannelInfo({
        channelId: channelId,
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
