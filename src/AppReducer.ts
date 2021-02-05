import type { AppState } from './AppContext';
import type { ChatMessageEvent } from './components/chat/types';
import type { AlertQueueEvent } from './components/alerts/types';
import type {
  GiveawayEntryEvent,
  GiveawayStartEvent,
  GiveawayEndEvent,
  GiveawayDrawEvent,
} from './components/giveaway/types';
import { MaxMessageCount } from './components/chat';
import { MainframeEvent } from './types';
import { getTeamMemberIconUrl } from './components/chat/message/utils';

interface AppAction {
  type: string;
  data:
    | AlertQueueEvent
    | ChatMessageEvent
    | GiveawayEntryEvent
    | GiveawayStartEvent
    | GiveawayEndEvent
    | GiveawayDrawEvent;
}

export default function AppReducer(state: AppState, action: AppAction) {
  const newState = { ...state };

  switch (action.type) {
    case 'addChatMessage':
      (action.data as ChatMessageEvent).teamMemberIconUrl = getTeamMemberIconUrl(
        (action.data as ChatMessageEvent).isTeamMember,
      );

      newState.chatMessages.push(action.data as ChatMessageEvent);

      if (newState.chatMessages.length > MaxMessageCount) {
        newState.chatMessages.shift();
      }

      return { ...newState };
    case MainframeEvent.follow:
    case MainframeEvent.raid:
    case MainframeEvent.cheer:
    case MainframeEvent.sub:
      if (!newState.alerts.some((alert) => alert.data.id === action.data.id)) {
        newState.alerts.push(action.data as AlertQueueEvent);
      }
      return { ...newState };
    case 'alert_complete':
      newState.alerts.shift();
      return { ...newState };
    case MainframeEvent.startgiveaway:
      newState.giveawayInProgress = true;
      return { ...newState };
    case MainframeEvent.endgiveaway:
      newState.giveawayInProgress = false;
      return { ...newState };
    case MainframeEvent.drawgiveaway:
      newState.giveawayWinner = (action.data as GiveawayDrawEvent).data.winner;
      return { ...newState };
    case MainframeEvent.entergiveaway:
      newState.giveawayEntries.push(action.data as GiveawayEntryEvent);
      return { ...newState };
    default:
      throw new Error(`Unrecognised action type: ${action.type}`);
  }
}
