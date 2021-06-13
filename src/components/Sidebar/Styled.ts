import styled from 'styled-components';

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.25;
  height: 100vh;
  background: #2f3135;
`;

export const SidebarTop = {
  Panel: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #2f3135;
    color: #fff;
    border-bottom: 3px solid #26282c;
  `,

  Title: styled.h3``,
};

export const SidebarChannel = {
  Panel: styled.div`
    flex: 1;
  `,

  ChannelHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #2f3135;
    color: gray;
  `,

  SidebarHeader: styled.div`
    display: flex;
    align-items: center;
  `,

  SidebarChannelTitle: styled.h4``,

  ChannelList: styled.div``,
};
