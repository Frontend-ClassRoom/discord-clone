import React, { FC } from 'react';
import { SendMessage } from './Styled';
import {
  AddCircle,
  CardGiftcard,
  GifRounded,
  EmojiEmotions,
} from '@material-ui/icons';

interface Props {
  value: string;
  channelName: string;
  disabled: boolean;
  onChange: (message: string) => void;
  sendMessage: () => void;
}

const ChatSendMessage: FC<Props> = ({
  value,
  channelName,
  disabled,
  onChange,
  sendMessage,
}) => {
  return (
    <SendMessage.Panel>
      <AddCircle fontSize="large" />
      <SendMessage.InputBox>
        <SendMessage.InputText
          type="text"
          value={value}
          disabled={disabled}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          onChange={(e: any) => onChange(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <SendMessage.SubmitButton onClick={sendMessage}>
          Send Message
        </SendMessage.SubmitButton>
      </SendMessage.InputBox>
      <SendMessage.Icons>
        <CardGiftcard fontSize="large" />
        <GifRounded fontSize="large" />
        <EmojiEmotions fontSize="large" />
      </SendMessage.Icons>
    </SendMessage.Panel>
  );
};

export default ChatSendMessage;
