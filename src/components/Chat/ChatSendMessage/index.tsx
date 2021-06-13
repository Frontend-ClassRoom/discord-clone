import React, { FC } from 'react';
import { SendMessage } from './Styled';
import {
  AddCircle,
  CardGiftcard,
  GifRounded,
  EmojiEmotions,
} from '@material-ui/icons';

const ChatSendMessage: FC = () => {
  return (
    <SendMessage.Panel>
      <AddCircle fontSize="large" />
      <SendMessage.InputBox>
        <SendMessage.InputText
          type="text"
          placeholder={`Message #TESTCHANNEL`}
        />
        <SendMessage.SubmitButton>Send Message</SendMessage.SubmitButton>
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
