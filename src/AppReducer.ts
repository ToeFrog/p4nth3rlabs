import type { AppState } from './AppContext';
import type { ChatMessageEvent } from './components/chat/types';
// import { ChatMessageQueueMaxMessageCount } from './components/chat';
export interface AppAction {
  type: 'addChatMessage' | 'addAlert';
  chatMessage: ChatMessageEvent;
}

export default function AppReducer(state: AppState, action: AppAction) {
  const newState = { ...state };

  switch (action.type) {
    case 'addChatMessage':
      console.log('running');
      
      newState.chatMessages.push(action.chatMessage);

      return { ...newState };

    default:
      throw new Error(`Unrecognised action type: ${action.type}`);
  }
}
