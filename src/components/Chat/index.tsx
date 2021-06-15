import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from 'store/reducer/appSlice';
import { selectUser } from 'store/reducer/userSlice';
import db from 'utils/firebase';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatSendMessage from './ChatSendMessage';
import { ChatScreen } from './Styled';
import { MessageType } from 'types/Message';

const Chat: FC = () => {
  const userState = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string>('');
  const [channelMessage, setChannelMessage] = useState<MessageType[]>([]);

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('messageIndex', 'asc')
        .onSnapshot((snapshot) => {
          const docs: any = snapshot.docs.map((doc) =>
            Object.assign({}, doc.data(), {
              modify: doc.data().modify ? doc.data().modify : false,
              messageId: doc.id,
            })
          );
          if (docs) {
            setChannelMessage(docs);
          }
        });
    }
  }, [channelId]);

  const scrollMoveBottom = useCallback(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [channelMessage]);

  useEffect(() => {
    scrollMoveBottom();
  }, [channelMessage]);

  const sendMessage = () => {
    if (!message) return;
    if (!channelId) return;

    const timestamp = {
      // 기존 timestamp와 형식을 맞춰주기 위해 임시 추가
      // 채널수정,삭제 채팅 수정삭제 기능 추가 후 변경
      seconds: new Date().getTime(),
    };
    const messageIndex = channelMessage.length > 0 ? channelMessage.length : 0;

    const newMessage = {
      message,
      messageIndex,
      timestamp,
      user: userState,
    };

    db.collection('channels')
      .doc(`${channelId}`)
      .collection('messages')
      .add(newMessage)
      .then((res) => {
        if (res && res.id) {
          const combineResMessage = Object.assign({
            ...newMessage,
            messageId: res.id,
            messageIndex: channelMessage.length,
          });
          setChannelMessage([...channelMessage, combineResMessage]);
          setMessage('');
        }
      });
  };

  const onChangeMessage = useCallback(
    (message: string) => {
      setMessage(message);
    },
    [message]
  );

  const deleteMessage = useCallback(
    (messageId: string) => {
      if (!channelId) return;

      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .doc(messageId)
        .delete()
        .then(() => {
          const filteredMessage = channelMessage?.filter(
            (message) => message.messageId !== messageId
          );

          if (filteredMessage) {
            setChannelMessage(filteredMessage);
          }
        });
    },
    [channelMessage]
  );

  const updateMessage = useCallback(
    (messageId: string) => {
      const updateMessage = prompt('Enter a new Channel name');
      if (!updateMessage || !channelId) return;
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .doc(messageId)
        .update({
          message: updateMessage,
          modify: true,
          timestamp: { seconds: new Date().getTime() },
        });
    },
    [channelMessage]
  );

  return (
    <ChatScreen.Panel>
      {/*  */}
      <ChatHeader channelName={channelName} />
      {/*  */}
      <ChatScreen.MessageList>
        {channelMessage.map(
          (
            { message, timestamp, user, messageId, modify }: MessageType,
            index: number
          ) => (
            <ChatMessage
              key={index}
              message={message}
              messageId={messageId || ''}
              timestamp={timestamp}
              modify={modify || false}
              currentUserId={userState}
              user={user}
              updateMessage={updateMessage}
              deleteMessage={deleteMessage}
            />
          )
        )}
        <div ref={scrollRef} />
      </ChatScreen.MessageList>
      {/*  */}
      <ChatSendMessage
        value={message}
        channelName={channelName}
        onChange={onChangeMessage}
        sendMessage={sendMessage}
        disabled={channelId ? false : true}
      />
      {/*  */}
    </ChatScreen.Panel>
  );
};

export default Chat;
