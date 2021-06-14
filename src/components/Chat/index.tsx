import { FC, useCallback, useEffect, useState } from 'react';
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
  const [message, setMessage] = useState<string>('');
  const [channelMessage, setChannelMessage] = useState([]);
  const channelMessageDB = db
    .collection('channels')
    .doc(channelId)
    .collection('messages');

  useEffect(() => {
    if (channelId) {
      channelMessageDB.orderBy('timestamp', 'asc').onSnapshot((snapshot) => {
        const docs: any = snapshot.docs.map((doc) => doc.data());
        if (docs) {
          setChannelMessage(docs);
        }
      });
    }
  }, [channelId]);

  const sendMessage = () => {
    if (!message) return;

    const timestamp = {
      // 기존 timestamp와 형식을 맞춰주기 위해 임시 추가
      // 채널수정,삭제 채팅 수정삭제 기능 추가 후 변경
      seconds: new Date().getTime(),
    };

    channelMessageDB.add({
      message: message,
      timestamp: timestamp,
      user: userState,
    });

    setMessage('');
  };

  const onChangeMessage = useCallback(
    (message: string) => {
      setMessage(message);
    },
    [message]
  );

  const updateMessage = useCallback(() => {}, []);
  const deleteMessage = useCallback(() => {}, []);

  return (
    <ChatScreen.Panel>
      {/*  */}
      <ChatHeader channelName={channelName} />
      {/*  */}
      <ChatScreen.MessageList>
        {channelMessage.map(({ message, timestamp, user }: MessageType) => (
          <ChatMessage
            message={message}
            timestamp={timestamp}
            user={user}
            currentUserId={userState}
          />
        ))}
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
