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

  UserName: styled.h4``,

  MessageTimestamp: styled.span`
    margin-left: 10px;
    color: gray;
    font-size: x-small;
  `,

  MessageBody: styled.p`
    margin-top: 5px;
  `,
};
