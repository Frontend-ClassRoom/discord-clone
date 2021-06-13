import React, { FC } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { ExpandMore } from '@material-ui/icons';
import { StyledSidebar, SidebarTop, SidebarChannel } from './Styled';
import ChannelList from './ChannelList';
import Voice from './Voice';
import Profile from './Profile';

const Sidebar: FC = () => {
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
          <AddIcon />
        </SidebarChannel.ChannelHeader>
        {/*  */}

        {/*  */}
        <SidebarChannel.ChannelList>
          <ChannelList id={1} channel="Youtube" />
          <ChannelList id={1} channel="Youtube" />
          <ChannelList id={1} channel="Youtube" />
          <ChannelList id={1} channel="Youtube" />
          <ChannelList id={1} channel="Youtube" />
        </SidebarChannel.ChannelList>
        {/*  */}
      </SidebarChannel.Panel>
      {/*  */}
      <Voice />
      {/*  */}
      <Profile />
      {/*  */}
    </StyledSidebar>
  );
};

export default Sidebar;
