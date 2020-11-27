import { createContext, Dispatch } from 'react';
import type { AlertQueueEvent } from './components/alerts/types';
import type { ChatMessageEvent } from './components/chat/types';

export interface AppState {
  chatMessages: ChatMessageEvent[];
  alerts: AlertQueueEvent[];
}

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<any>;
}

const AppContext = createContext({} as AppContextProps);

export default AppContext;
