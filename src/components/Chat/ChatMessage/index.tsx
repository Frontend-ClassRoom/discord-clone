import React, { FC } from 'react';
import { ChatMessageItem } from './Styled';
import { Avatar } from '@material-ui/core';

const ChatMessage: FC = () => {
  return (
    <ChatMessageItem.Panel>
      <Avatar />
      <ChatMessageItem.MessageInfo>
        <ChatMessageItem.UserName>
          UserName
          <ChatMessageItem.MessageTimestamp>
            times
          </ChatMessageItem.MessageTimestamp>
        </ChatMessageItem.UserName>
        <ChatMessageItem.MessageBody>message</ChatMessageItem.MessageBody>
      </ChatMessageItem.MessageInfo>
    </ChatMessageItem.Panel>
  );
};

export default ChatMessage;
