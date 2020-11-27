import type { AppState } from './AppContext';
import type { ChatMessageEvent } from './components/chat/types';
import type { AlertQueueEvent } from './components/alerts/types';
import { MaxMessageCount } from './components/chat';
import { MainframeEvent } from './types';
interface AppAction {
  type: string;
  data: AlertQueueEvent | ChatMessageEvent;
}

export default function AppReducer(state: AppState, action: AppAction) {
  const newState = { ...state };

  switch (action.type) {
    case 'addChatMessage':
      newState.chatMessages.push(action.data as ChatMessageEvent);

      if (newState.chatMessages.length > MaxMessageCount) {
        newState.chatMessages.shift();
      }

      return { ...newState };
    case MainframeEvent.follow:
    case MainframeEvent.raid:
    case MainframeEvent.cheer:
      if (!newState.alerts.some((alert) => alert.data.id === action.data.id)) {
        newState.alerts.push(action.data as AlertQueueEvent);
      }
      return { ...newState };
    case 'alert_complete':
      newState.alerts.shift();
      return { ...newState };
    default:
      throw new Error(`Unrecognised action type: ${action.type}`);
  }
}
