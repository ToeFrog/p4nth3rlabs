export enum Alerts {
  Follow = 'follow',
  ChatMessage = 'chatmessage',
  Cheer = 'cheer',
  Sub = 'sub',
  GiftSub = 'giftsub',
}

export interface FollowAlert {
  type: 'follow';
  alertData: {
    followerUserId: string;
    logoUrl: string;
    followerName: string;
  };
}

export interface HostAlert {
  type: 'host';
  alertData: {
    viewerCount: number;
    hosterName: string;
    logoUrl: string;
  };
}

export interface GiftSubAlert {
  type: 'giftsub';
  alertData: {
    logoUrl: string;
    subscriberUsername: string;
    gifterUsername: string;
    subTier: string;
  };
}

export interface SubAlert {
  type: 'sub';
  alertData: {
    logoUrl: string;
    subscriberUsername: string;
    subTier: string;
    message: string;
    months: number;
  };
}

export type AlertQueueEvent = FollowAlert | HostAlert | SubAlert | GiftSubAlert;
