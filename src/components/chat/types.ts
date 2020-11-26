export interface ChatMessageEventEmote {
  [emoteid: string]: string[];
}

export interface ConstructedEmote {
  emoteId: string;
  emoteImageTag: string;
  emoteUrl: string;
  start: number;
  end: number;
}

export interface ChatMessageEvent {
  userId: string;
  username: string;
  displayName: string;
  messageId: string;
  message: string;
  logoUrl: string;
  isMod: boolean;
  isVip: boolean;
  isSubscriber: boolean;
  isBroadcaster: boolean;
  isTeamMember: boolean;
  emotes?: {
    [emoteid: string]: string[];
  };
  type: string | undefined;
  id: string;
}
