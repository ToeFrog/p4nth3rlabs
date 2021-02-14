import type { AllActions, AppState } from "./AppContext";
import { MaxMessageCount } from "./components/chat";
import { MainframeEvent } from 'p4nth3rb0t-types';
import { getTeamMemberIconUrl } from "./components/chat/message/utils";


function getRandomCongrats() {
  const congrats = ["Congratulations", "Well done", "You're a winner", "Good work", "Lucky you"];

  return congrats[Math.floor(Math.random() * congrats.length)];
}

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
    case 'alert_complete':
      newState.alerts.shift();
      return { ...newState };
    case MainframeEvent.startGiveaway:
      newState.giveawayInProgress = true;
      return { ...newState };
    case MainframeEvent.endGiveaway:
      newState.giveawayInProgress = false;
      newState.giveawayEntries = [];
      newState.giveawayWinner = {
        id: "",
        event: MainframeEvent.drawGiveaway,
        data: {
          winner: "",
          logoUrl: "",
        }
      };
      return { ...newState };
    case MainframeEvent.drawGiveaway:
      newState.giveawayWinner = action;
      newState.randomCongrats = getRandomCongrats();
      return { ...newState };
    case MainframeEvent.enterGiveaway:
      newState.giveawayEntries.push(action);
      return { ...newState };
    default:
      throw new Error(`Unrecognised action type: ${action.event}`);
  }
}
