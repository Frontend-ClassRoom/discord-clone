import { Chat, Sidebar } from 'components';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyles from './styles/common/GlobalStyles';
import { login, logout, selectUser } from './store/reducer/userSlice';
import Login from './pages/Login';
import { auth } from 'utils/firebase';

const App: FC = () => {
  const dispatch = useDispatch();
  const userState = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Login
        dispatch(
          login({
            uid: authUser.uid,
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
          })
        );
      } else {
        // Logout
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <GlobalStyles />
      {userState ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
