import React, { FC } from 'react';
import { SearchRounded } from '@material-ui/icons';
import { ChatSearch } from './Styled';

const ChatHeaderSearch: FC = () => {
  return (
    <ChatSearch.Panel>
      <ChatSearch.InputText type="text" placeholder="Search" />
      <ChatSearch.SearchButton>
        <SearchRounded />
      </ChatSearch.SearchButton>
    </ChatSearch.Panel>
  );
};

export default ChatHeaderSearch;
