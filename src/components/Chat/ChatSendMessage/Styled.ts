import styled from 'styled-components';

export const SendMessage = {
  Panel: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    margin: 20px;
    background: #474b53;
    border-radius: 5px;
    color: lightgray;
  `,

  InputBox: styled.span`
    display: flex;
    flex: 1;
  `,

  InputText: styled.input`
    padding: 15px;
    width: 100%;
    color: #fff;
    font-size: large;
  `,

  SubmitButton: styled.button`
    display: none;
  `,

  Icons: styled.div`
    > * {
      margin: 3px;
    }
  `,
};
