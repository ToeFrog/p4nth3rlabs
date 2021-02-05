import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import { GiveawayEntriesContainer } from './index.style';

interface GiveawayProps {}

export default function Giveaway(props: GiveawayProps) {
  const { state } = useContext(AppContext);
  const { giveawayEntries, giveawayWinner, giveawayInProgress } = state;

  //todo - scrolling marquee for entries

  return (
    <>
      {giveawayInProgress && (
        <GiveawayEntriesContainer>
          {giveawayWinner.length > 0 && <h1>{giveawayWinner}</h1>}
          {giveawayEntries.map((entry) => (
            <p key={entry.data.username}>{entry.data.username}</p>
          ))}
        </GiveawayEntriesContainer>
      )}
    </>
  );
}
