import styled from 'styled-components';

export const SidebarVoice = {
  Panel: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #2f3135;
    border-top: 1px solid gray;
    color: gray;
    > .voice-icon {
      color: #4fb185;
    }
  `,

  VoiceInfo: styled.div`
    flex: 1;
    padding: 10px;
    h3 {
      color: #4fb185;
    }
    p {
      font-size: smaller;
    }
  `,

  VoiceIcons: styled.div`
    > .MuiSvgIcon-root {
      cursor: pointer;
      &:first-child {
        margin-right: 10px;
      }
    }
  `,
};
