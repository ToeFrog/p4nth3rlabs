export enum AlertNames {
  Follow = 'follow',
}

export interface AlertQueueEvent {
  type: string,
  data: { [key: string]: string }
}

export interface FollowAlert extends AlertQueueEvent {
  type: AlertNames.Follow;
  data: {
    followerUserId: string;
    logoUrl: string;
    followerName: string;
  };
}

// export interface SubAlert {
//   type: AlertNames.Sub;
//   data: {
//     logoUrl: string;
//     subscriberUsername: string;
//     subTier: string;
//     message: string;
//     months: number;
//   };
// }

// export type AlertQueueEvent = FollowAlert;
