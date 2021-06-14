import styled from 'styled-components';

export const ChatMessageItem = {
  Panel: styled.div<{ modify: boolean }>`
    // modify => 본인의 채팅 메시지 경우 true
    display: flex;
    align-items: center;
    position: relative;
    padding: 20px;
    color: #fff;
    transition: background 0.3s ease;
    &:hover {
      background: ${({ modify }) => (modify ? 'rgba(0,0,0,0.5)' : 'none')};
      > .message-icons {
        visibility: ${({ modify }) => (modify ? 'visible' : 'hidden')};
        opacity: ${({ modify }) => (modify ? 1 : 0)};
      }
    }
  `,

  MessageInfo: styled.div`
    margin-left: 20px;
  `,

  UserName: styled.h4`
    display: flex;
    align-items: center;
  `,

  MessageTimestamp: styled.span`
    margin-left: 10px;
    color: gray;
    font-size: x-small;
  `,

  MessageBody: styled.p`
    margin-top: 5px;
  `,

  Icons: styled.div<{ modify: boolean }>`
    visibility: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    color: rgba(255, 255, 255, 0.8);
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;

    > * {
      margin: 5px;
      cursor: pointer;
    }
  `,
};
