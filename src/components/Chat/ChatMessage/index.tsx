import React, { FC } from 'react';
import { ChatMessageItem } from './Styled';
import { Avatar } from '@material-ui/core';
import { MessageTimestamp } from 'types/Message';
import { UserInfo } from 'types/User';
import { Delete, Edit } from '@material-ui/icons';

interface Props {
  message: string;
  messageId: string;
  modify: boolean;
  timestamp: MessageTimestamp;
  user: UserInfo;
  currentUserId: UserInfo;
  updateMessage: (messageId: string) => void;
  deleteMessage: (messageId: string) => void;
}

const ChatMessage: FC<Props> = ({
  message,
  messageId,
  timestamp,
  modify,
  user,
  currentUserId,
  updateMessage,
  deleteMessage,
}) => {
  const messageTimeStamp = new Date(timestamp.seconds).toLocaleTimeString();

  return (
    <ChatMessageItem.Panel modify={user.uid === currentUserId.uid}>
      <Avatar src={user.photo} />
      <ChatMessageItem.MessageInfo>
        <ChatMessageItem.UserName>
          {user.userName}
          <ChatMessageItem.MessageTimestamp>
            {messageTimeStamp}
            {modify && (
              <ChatMessageItem.MessageModifyState>
                수정됨
              </ChatMessageItem.MessageModifyState>
            )}
          </ChatMessageItem.MessageTimestamp>
        </ChatMessageItem.UserName>
        <ChatMessageItem.MessageBody>{message}</ChatMessageItem.MessageBody>
      </ChatMessageItem.MessageInfo>
      <ChatMessageItem.Icons
        className="message-icons"
        modify={user.uid === currentUserId.uid}
      >
        <Edit onClick={() => updateMessage(messageId)} />
        <Delete onClick={() => deleteMessage(messageId)} />
      </ChatMessageItem.Icons>
    </ChatMessageItem.Panel>
  );
};

export default ChatMessage;
