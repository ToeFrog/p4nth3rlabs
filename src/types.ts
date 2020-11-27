import { ChatMessageEvent } from './components/chat/types';
import { AlertQueueEvent } from './components/alerts/types';
export interface SocketOptions {
  reconnect: boolean;
}

// eslint-disable-next-line no-shadow
export enum MainframeEvent {
  sub = 'sub',
  raid = 'raid',
  cheer = 'cheer',
  specialuserjoin = 'specialuserjoin',
  teammemberjoin = 'teammember',
  chatmessage = 'chatmessage',
  follow = 'follow',
}
export interface ChatWebsocketEvent {
  broadcaster: string;
  event: MainframeEvent;
  id: string;
  data: ChatMessageEvent;
}

export interface AlertWebsocketEvent {
  broadcaster: string;
  event: MainframeEvent;
  id: string;
  data: AlertQueueEvent;
}

// eslint-disable-next-line no-unused-vars
export type Callback = (data: any) => void;

export type TrustedEventMap = {
  raw: Set<Callback>;
  open: Set<Callback>;
  close: Set<Callback>;
  error: Set<Callback>;
  sub: Set<Callback>;
  giftsub: Set<Callback>;
  join: Set<Callback>;
  message: Set<Callback>;
  raid: Set<Callback>;
  cheer: Set<Callback>;
  specialuserjoin: Set<Callback>;
  teammemberjoin: Set<Callback>;
  chatmessage: Set<Callback>;
  follow: Set<Callback>;
};

export type TrustedEvent = keyof TrustedEventMap;
