import { createContext, Dispatch } from 'react';
import type { AlertQueueEvent } from './components/alerts/types';
import type { ChatMessageEvent } from './components/chat/types';
import type { GiveawayEntryEvent } from './components/giveaway/types';

export interface AppState {
  chatMessages: ChatMessageEvent[];
  alerts: AlertQueueEvent[];
  giveawayEntries: GiveawayEntryEvent[];
  giveawayInProgress: boolean;
  giveawayWinner: string;
}

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<any>;
}

const AppContext = createContext({} as AppContextProps);

export default AppContext;
