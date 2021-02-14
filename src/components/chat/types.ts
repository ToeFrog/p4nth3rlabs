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
