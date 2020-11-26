import { createContext, Dispatch } from 'react';
import type { ChatMessageEvent } from './components/chat/types';

export interface AppState {
  chatMessages: ChatMessageEvent[];
}

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<any>;
}

const AppContext = createContext({} as AppContextProps);

export default AppContext;
