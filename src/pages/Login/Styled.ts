import styled from 'styled-components';

export const LoginPage = {
  Panel: styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100vh;
  `,

  LogoBox: styled.div`
    width: 70vw;
  `,

  Logo: styled.img`
    max-width: 100%;
    object-fit: contain;
    vertical-align: top;
  `,

  SignInButton: styled.button`
    width: 300px;
    height: 40px;
    background: #5865f2;
    border-radius: 5px;
    color: #eff2f5;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background: #23272a;
    }
  `,
};
