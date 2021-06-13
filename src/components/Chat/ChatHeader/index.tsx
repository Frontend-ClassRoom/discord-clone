import React, { FC } from 'react';
import {
  Notifications,
  EditLocationRounded,
  PeopleAltRounded,
  SendRounded,
  HelpRounded,
} from '@material-ui/icons';
import { ChatNavigation } from './Styled';
import ChatHeaderSearch from '../ChatHeaderSearch/index';

interface Props {
  channelName: string;
}

const ChatHeader: FC<Props> = ({ channelName }) => {
  return (
    <ChatNavigation.Panel>
      {/*  */}
      <ChatNavigation.LeftSection>
        <ChatNavigation.ChatTitle>
          <ChatNavigation.ChatHash>#</ChatNavigation.ChatHash>
          {channelName}
        </ChatNavigation.ChatTitle>
      </ChatNavigation.LeftSection>
      {/*  */}
      <ChatNavigation.RightSection>
        <Notifications />
        <EditLocationRounded />
        <PeopleAltRounded />
        <ChatHeaderSearch />
        <SendRounded />
        <HelpRounded />
      </ChatNavigation.RightSection>
      {/*  */}
    </ChatNavigation.Panel>
  );
};

export default ChatHeader;
