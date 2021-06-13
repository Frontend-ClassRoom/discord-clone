import React, { FC } from 'react';
import { ProfileInfo } from './Styled';
import { Avatar } from '@material-ui/core';
import { Mic, Headset, Settings } from '@material-ui/icons';
import { UserInfo } from 'types/User';

interface Props {
  userState: UserInfo;
  SignOut: () => void;
}

const Profile: FC<Props> = ({ userState, SignOut }) => {
  const { userName, photo, uid } = userState;

  return (
    <ProfileInfo.Panel>
      <Avatar src={`${photo}`} onClick={SignOut} />
      <ProfileInfo.InfoArea>
        <ProfileInfo.UserName>{userName}</ProfileInfo.UserName>
        <ProfileInfo.UserHash>{`#${uid.substring(0, 5)}`}</ProfileInfo.UserHash>
      </ProfileInfo.InfoArea>
      <ProfileInfo.Icons>
        <Mic />
        <Headset />
        <Settings />
      </ProfileInfo.Icons>
    </ProfileInfo.Panel>
  );
};

export default Profile;
