export enum AlertNames {
  Follow = 'follow',
  Raid = 'raid',
  Cheer = 'cheer',
  Sub = 'sub',
}

export interface AlertQueueEvent {
  type: string;
  id: string;
  data: { [key: string]: any };
}

export interface RaidAlert extends AlertQueueEvent {
  type: AlertNames.Raid;
  data: {
    raiderCount: number;
    raider: string;
    logoUrl: string;
  };
}

export interface FollowAlert extends AlertQueueEvent {
  type: AlertNames.Follow;
  data: {
    followerUserId: string;
    logoUrl: string;
    followerName: string;
  };
}

export interface CheerAlert extends AlertQueueEvent {
  type: AlertNames.Cheer;
  data: {
    cheererName: string;
    logoUrl: string;
    bitCount: number;
  };
}

export interface SubAlert {
  type: AlertNames.Sub;
  data: {
    logoUrl: string;
    subscriberUsername: string;
    subTier: string;
    message: string;
    months: number;
  };
}
