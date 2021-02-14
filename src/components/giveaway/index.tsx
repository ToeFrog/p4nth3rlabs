import React, { useContext } from "react";
import AppContext from "../../AppContext";
import {
  GiveawayEntriesContainer,
  GiveawayEntriesInnerContainer,
  GiveawayEntriesNameContainer,
  GiveawayTitle,
  GiveawayTitleText,
  Entry,
  EntryLogo,
  EntryName,
} from "./index.style";
import MajickPanther from "./svgs/majick";
import PewPewPanther from "./svgs/pewpew";

interface GiveawayProps {}

export default function Giveaway(props: GiveawayProps) {
  const { state } = useContext(AppContext);
  const { giveawayEntries, giveawayInProgress } = state;

  return (
    <>
      {!giveawayInProgress && (
        <audio autoPlay>
          <source src={process.env.REACT_APP_AUDIO_ALERT_GIVEAWAY_URL} type="audio/mp3" />
        </audio>
      )}
      {giveawayInProgress && (
        <GiveawayEntriesContainer out={!giveawayInProgress}>
          <audio autoPlay>
            <source src={process.env.REACT_APP_AUDIO_ALERT_GIVEAWAY_URL} type="audio/mp3" />
          </audio>
          <GiveawayEntriesInnerContainer>
            <GiveawayTitle>
              <MajickPanther />
              <GiveawayTitleText>Giveaway in progress!</GiveawayTitleText>
              <PewPewPanther />
            </GiveawayTitle>

            <GiveawayEntriesNameContainer>
              <>
                {giveawayEntries.map((entry) => (
                  <Entry key={entry.id}>
                    <EntryLogo src={entry.data.logoUrl} alt={entry.data.username} />
                    <EntryName>{entry.data.username}</EntryName>
                  </Entry>
                ))}
              </>
            </GiveawayEntriesNameContainer>

            <GiveawayTitle>
              <MajickPanther />
              <GiveawayTitleText>Type !win in chat to play!</GiveawayTitleText>
              <PewPewPanther />
            </GiveawayTitle>
          </GiveawayEntriesInnerContainer>
        </GiveawayEntriesContainer>
      )}
    </>
  );
}
