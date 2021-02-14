import type { AllActions, AppState } from "./AppContext";
import { MaxMessageCount } from "./components/chat";
import { MainframeEvent } from "p4nth3rb0t-types";
import { getTeamMemberIconUrl } from "./components/chat/message/utils";

export default function AppReducer(state: AppState, action: AllActions) {
  const newState = { ...state };

  switch (action.event) {
    case MainframeEvent.chatMessage:
      action.data.teamMemberIconUrl = getTeamMemberIconUrl(action.data.isTeamMember);

      newState.chatMessages.push(action.data);

      if (newState.chatMessages.length > MaxMessageCount) {
        newState.chatMessages.shift();
      }

      return { ...newState };
    case MainframeEvent.follow:
    case MainframeEvent.raid:
    case MainframeEvent.cheer:
    case MainframeEvent.sub:
      if (!newState.alerts.some((alert) => alert.id === action.id)) {
        newState.alerts.push(action);
      }
      return { ...newState };
    case "alert_complete":
      newState.alerts.shift();
      return { ...newState };
    case MainframeEvent.startGiveaway:
      newState.giveawayInProgress = true;
      return { ...newState };
    case MainframeEvent.endGiveaway:
      newState.giveawayInProgress = false;
      newState.giveawayEntries = [];
      return { ...newState };
    case MainframeEvent.drawGiveaway:
      if (!newState.alerts.some((alert) => alert.id === action.id)) {
        newState.alerts.push(action);
      }
      return { ...newState };
    case MainframeEvent.enterGiveaway:
      newState.giveawayEntries.push(action);
      return { ...newState };
    default:
      return { ...state };
  }
}
