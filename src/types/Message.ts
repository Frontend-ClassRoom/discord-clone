import { UserInfo } from 'types/User';

export const TIME_STAMP_PADDING_MS = 1000;

export interface MessageTimestamp {
  nanoseconds?: number;
  seconds: number;
}

export interface MessageType {
  message: string;
  messageId: string;
  messageIndex: number;
  timestamp: number;
  user: UserInfo;
  modify?: boolean;
}
