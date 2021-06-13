import React, { FC } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatSendMessage from './ChatSendMessage';
import { ChatScreen } from './Styled';

const Chat: FC = () => {
  return (
    <ChatScreen.Panel>
      {/*  */}
      <ChatHeader />
      {/*  */}
      <ChatScreen.MessageList>
        <ChatMessage />
      </ChatScreen.MessageList>
      {/*  */}
      <ChatSendMessage />
      {/*  */}
    </ChatScreen.Panel>
  );
};

export default Chat;
