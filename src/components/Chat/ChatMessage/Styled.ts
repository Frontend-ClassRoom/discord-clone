import styled from 'styled-components';

export const ChatMessageItem = {
  Panel: styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    color: #fff;
  `,

  MessageInfo: styled.div`
    margin-left: 20px;
  `,

  UserName: styled.h4`
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
    cursor: default;
  `,

  MessageTimestamp: styled.span`
    margin-left: 10px;
    color: gray;
    font-size: x-small;
    cursor: default;
  `,

  MessageBody: styled.p`
    margin-top: 10px;
  `,
};
