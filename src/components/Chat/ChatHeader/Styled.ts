import styled from 'styled-components';

export const ChatNavigation = {
  Panel: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: gray;
  `,

  ChatTitle: styled.h3`
    display: flex;
    align-items: center;
    color: #fff;
    cursor: default;
    ::selection {
      background: none;
    }
  `,

  ChatHash: styled.span`
    padding: 10px;
    color: gray;
    font-size: 30px;
    cursor: default;
    ::selection {
      background: none;
    }
  `,

  LeftSection: styled.div``,

  RightSection: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0.5;

    > .MuiSvgIcon-root {
      transition: color 0.2s ease;
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 10px;
      }
      &:hover {
        color: #fff;
      }
    }
  `,
};
