export enum Alerts {
  Follow = "follow",
  ChatMessage = "chatmessage",
  Cheer = "cheer",
  Sub = "sub",
  GiftSub = "giftsub",
}

export interface FollowAlert {
  followerUserId: string;
  logoUrl: string;
  followerName: string;
}

export interface HostAlert {
  viewerCount: number;
  hosterName: string;
  logoUrl: string;
}

export interface GiftSubAlert {
  logoUrl: string;
  subscriberUsername: string;
  gifterUsername: string;
  subTier: string;
}

export interface SubAlert {
  logoUrl: string;
  subscriberUsername: string;
  subTier: string;
  message: string;
  months: number;
}

export interface AlertQueueEvent {
  type: string;
  data: FollowAlert | HostAlert | SubAlert | GiftSubAlert;
}
