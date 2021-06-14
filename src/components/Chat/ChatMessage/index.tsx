import React, { FC } from 'react';
import { ChatMessageItem } from './Styled';
import { Avatar } from '@material-ui/core';
import { MessageTimestamp } from 'types/Message';
import { UserInfo } from 'types/User';

interface Props {
  message: string;
  timestamp: MessageTimestamp;
  user: UserInfo;
}

const ChatMessage: FC<Props> = ({ message, timestamp, user }) => {
  const messageTime = new Date(timestamp.seconds).toLocaleTimeString();
  return (
    <ChatMessageItem.Panel>
      <Avatar src={user.photo} />
      <ChatMessageItem.MessageInfo>
        <ChatMessageItem.UserName>
          {user.userName}
          <ChatMessageItem.MessageTimestamp>
            {messageTime}
          </ChatMessageItem.MessageTimestamp>
        </ChatMessageItem.UserName>
        <ChatMessageItem.MessageBody>{message}</ChatMessageItem.MessageBody>
      </ChatMessageItem.MessageInfo>
    </ChatMessageItem.Panel>
  );
};

export default ChatMessage;
