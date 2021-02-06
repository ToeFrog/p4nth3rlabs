export enum GiveawayEvents {
  Enter = 'enter',
  Start = 'start',
  End = 'end',
  Draw = 'draw',
}

interface GiveawayEvent {
  type: string;
  id: string;
  data: { [key: string]: any };
}

export interface GiveawayEntryEvent extends GiveawayEvent {
  type: GiveawayEvents.Enter;
  data: {
    username: string;
    logoUrl: string;
  };
}

export interface GiveawayStartEvent extends GiveawayEvent {
  type: GiveawayEvents.Start;
  data: {};
}

export interface GiveawayEndEvent extends GiveawayEvent {
  type: GiveawayEvents.End;
  data: {};
}

export interface GiveawayDrawEvent extends GiveawayEvent {
  type: GiveawayEvents.Draw;
  data: {
    winner: string;
  };
}
