import { ChatMessageData, CheerPacket, DrawGiveawayPacket, EndGiveawayPacket, EnterGiveawayPacket, FollowPacket, RaidPacket, StartGiveawayPacket, SubPacket, WebSocketPacket } from "p4nth3rb0t-types";
import { createContext, Dispatch } from "react";

export type AlertQueueEvent = CheerPacket | SubPacket | FollowPacket | RaidPacket; 
export type GiveawayEntryEvent = EnterGiveawayPacket | StartGiveawayPacket | EndGiveawayPacket | DrawGiveawayPacket; 

export interface AlertCompleteAction {
  event: 'alert_complete';
  id: 'alert_complete';

}

export type AllActions = WebSocketPacket | AlertCompleteAction;

export interface AppState {
  chatMessages: ChatMessageData[];
  alerts: AlertQueueEvent[];
  giveawayEntries: EnterGiveawayPacket[];
  giveawayInProgress: boolean;
  giveawayWinner: DrawGiveawayPacket;
  randomCongrats: string;
}

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<any>;
}

const AppContext = createContext({} as AppContextProps);

export default AppContext;
