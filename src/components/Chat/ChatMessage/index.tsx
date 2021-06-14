import React, { FC } from 'react';
import { ChatMessageItem } from './Styled';
import { Avatar } from '@material-ui/core';
import { MessageTimestamp } from 'types/Message';
import { UserInfo } from 'types/User';
import { Delete, Edit } from '@material-ui/icons';

interface Props {
  message: string;
  timestamp: MessageTimestamp;
  user: UserInfo;
  currentUserId: UserInfo;
}

const ChatMessage: FC<Props> = ({
  message,
  timestamp,
  user,
  currentUserId,
}) => {
  const messageTimeStamp = new Date(timestamp?.seconds).toUTCString();

  return (
    <ChatMessageItem.Panel modify={user.uid === currentUserId.uid}>
      <Avatar src={user.photo} />
      <ChatMessageItem.MessageInfo>
        <ChatMessageItem.UserName>
          {user.userName}
          <ChatMessageItem.MessageTimestamp>
            {messageTimeStamp}
          </ChatMessageItem.MessageTimestamp>
        </ChatMessageItem.UserName>
        <ChatMessageItem.MessageBody>{message}</ChatMessageItem.MessageBody>
      </ChatMessageItem.MessageInfo>
      <ChatMessageItem.Icons
        className="message-icons"
        modify={user.uid === currentUserId.uid}
      >
        <Edit />
        <Delete />
      </ChatMessageItem.Icons>
    </ChatMessageItem.Panel>
  );
};

export default ChatMessage;
