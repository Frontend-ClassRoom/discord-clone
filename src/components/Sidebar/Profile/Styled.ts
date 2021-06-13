import styled from 'styled-components';

export const ProfileInfo = {
  Panel: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #2f3135;
    border-top: 1px solid gray;
    color: gray;
  `,
  InfoArea: styled.div`
    flex: 1;
    padding: 10px;
  `,
  UserName: styled.h3`
    color: #fff;
  `,
  UserHash: styled.p`
    margin-top: 5px;
  `,
  Icons: styled.div`
    > .MuiSvgIcon-root {
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  `,
};
