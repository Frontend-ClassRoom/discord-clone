import React, { FC } from 'react';
import { InfoOutlined, SignalCellularAlt, Call } from '@material-ui/icons';
import { SidebarVoice } from './Styled';

const Voice: FC = () => {
  return (
    <SidebarVoice.Panel>
      <SignalCellularAlt className="voice-icon" />
      <SidebarVoice.VoiceInfo>
        <h3>Voice Connected</h3>
        <p>Stream</p>
      </SidebarVoice.VoiceInfo>
      <SidebarVoice.VoiceIcons>
        <InfoOutlined />
        <Call />
      </SidebarVoice.VoiceIcons>
    </SidebarVoice.Panel>
  );
};

export default Voice;
