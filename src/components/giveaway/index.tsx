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
  PantherContainer,
} from "./index.style";
import MajickPanther from "./svgs/majick";
import PewPewPanther from "./svgs/pewpew";

interface GiveawayProps {}

function getRandomLuckMessage(username: string): string {
  const messages = [
    `Good luck, ${username}!`,
    `You can do it, ${username}!`,
    `You're a winner, ${username}!`,
    `Go go go, ${username}!`,
    `In it to win it, ${username}!`,
    `[object Object], ${username}!`,
    `Win win win, ${username}!`,
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}

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
              <PantherContainer>
                <MajickPanther />
              </PantherContainer>
              <GiveawayTitleText>Win a JetBrains License!</GiveawayTitleText>
              <PantherContainer>
                <MajickPanther />
              </PantherContainer>
            </GiveawayTitle>

            <GiveawayEntriesNameContainer>
              <>
                {giveawayEntries.map((entry) => (
                  <Entry key={entry.id}>
                    <EntryLogo src={entry.data.logoUrl} alt={entry.data.username} />
                    <EntryName>{getRandomLuckMessage(entry.data.username)}</EntryName>
                  </Entry>
                ))}
              </>
            </GiveawayEntriesNameContainer>

            <GiveawayTitle>
              <PantherContainer>
                <PewPewPanther />
              </PantherContainer>
              <GiveawayTitleText>Type !win in chat to play!</GiveawayTitleText>
              <PantherContainer>
                <PewPewPanther />
              </PantherContainer>
            </GiveawayTitle>
          </GiveawayEntriesInnerContainer>
        </GiveawayEntriesContainer>
      )}
    </>
  );
}
