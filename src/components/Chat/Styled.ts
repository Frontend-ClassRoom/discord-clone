import styled from 'styled-components';

export const ChatScreen = {
  Panel: styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.75;
    height: 100vh;
    background: #363a3f;
  `,

  MessageList: styled.div`
    height: calc(100% - 70px - 67px);
    overflow-y: auto;
  `,
};
