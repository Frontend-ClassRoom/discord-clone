interface ChannelInfo {
  channelName: string;
}

export interface Channel {
  id: string;
  channel: ChannelInfo;
}

export interface ChannelListDocs {
  docs: Channel[];
}
