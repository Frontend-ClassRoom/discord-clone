import React, { FC } from 'react';
import { ProfileInfo } from './Styled';
import { Avatar } from '@material-ui/core';
import { Mic, Headset, Settings } from '@material-ui/icons';

const Profile: FC = () => {
  return (
    <ProfileInfo.Panel>
      <Avatar src="https://avatars.githubusercontent.com/u/85790271?v=4" />
      <ProfileInfo.InfoArea>
        <ProfileInfo.UserName>@UserName</ProfileInfo.UserName>
        <ProfileInfo.UserHash>#thisMyId</ProfileInfo.UserHash>
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
