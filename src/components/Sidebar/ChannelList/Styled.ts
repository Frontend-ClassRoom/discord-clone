import styled from 'styled-components';

export const ChannelListItem = {
  Panel: styled.div`
    position: relative;
    transition: background 0.3s ease;
    &:hover {
      background: #363a3f;
    }
  `,
  Title: styled.h4`
    display: flex;
    padding-left: 15px;
    align-items: center;
    /* background: #2f3135; */
    color: gray;
    cursor: pointer;
  `,

  Hash: styled.span`
    font-size: 30px;
    padding: 8px;
  `,

  Icons: styled.div<{ hovered: boolean }>`
    position: absolute;
    right: 0;
    top: 50%;
    padding-right: 20px;
    color: gray;
    opacity: ${({ hovered }) => (hovered ? 1 : 0)};
    transform: translateY(-50%);
    transition: all 0.3s ease;
    > * {
      margin-left: 5px;
      cursor: pointer;
    }
  `,
};
