import type { AppState } from "./AppContext";
import type { ChatMessageEvent } from "./components/chat/types";
import type { AlertQueueEvent } from "./components/alerts/types";
import type {
  GiveawayEntryEvent,
  GiveawayStartEvent,
  GiveawayEndEvent,
} from "./components/giveaway/types";
import { GiveawayEvents } from "./components/giveaway/types";
import { MaxMessageCount } from "./components/chat";
import { MainframeEvent } from "./types";
import { getTeamMemberIconUrl } from "./components/chat/message/utils";

interface AppAction {
  type: string;
  data:
    | AlertQueueEvent
    | ChatMessageEvent
    | GiveawayEntryEvent
    | GiveawayStartEvent
    | GiveawayEndEvent;
}

function getRandomCongrats() {
  const congrats = ["Congratulations", "Well done", "You're a winner", "Good work", "Lucky you"];

  return congrats[Math.floor(Math.random() * congrats.length)];
}

export default function AppReducer(state: AppState, action: AppAction) {
  const newState = { ...state };

  switch (action.type) {
    case "addChatMessage":
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
    case "alert_complete":
      newState.alerts.shift();
      return { ...newState };
    case MainframeEvent.startgiveaway:
      newState.giveawayInProgress = true;
      return { ...newState };
    case MainframeEvent.endgiveaway:
      newState.giveawayInProgress = false;
      newState.giveawayEntries = [];
      newState.giveawayWinner = {
        type: GiveawayEvents.Enter,
        id: "",
        data: {
          username: "",
          logoUrl: "",
        },
      };
      return { ...newState };
    case MainframeEvent.drawgiveaway:
      const winner: GiveawayEntryEvent = {
        data: (action.data as GiveawayEntryEvent).data,
        type: GiveawayEvents.Enter,
        id: action.data.id,
      };
      newState.giveawayWinner = winner;
      newState.randomCongrats = getRandomCongrats();
      return { ...newState };
    case MainframeEvent.entergiveaway:
      newState.giveawayEntries.push(action.data as GiveawayEntryEvent);
      return { ...newState };
    default:
      throw new Error(`Unrecognised action type: ${action.type}`);
  }
}
