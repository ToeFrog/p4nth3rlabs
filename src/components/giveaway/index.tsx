import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import {
  GiveawayEntriesContainer,
  GiveawayEntriesInnerContainer,
  GiveawayTitle,
  GiveawayTitleText,
  Entry,
  EntryLogo,
  EntryName,
} from './index.style';
import { GiveawayEvents } from './types';
import MajickPanther from './svgs/majick';
import PewPewPanther from './svgs/pewpew';

interface GiveawayProps {}

export default function Giveaway(props: GiveawayProps) {
  const { state } = useContext(AppContext);
  const { giveawayEntries, giveawayWinner, giveawayInProgress } = state;

  // giveawayEntries.push({
  //   id: Math.random().toString(),
  //   type: GiveawayEvents.Enter,
  //   data: {
  //     username: 'SociableSteve',
  //     logoUrl:
  //       'https://static-cdn.jtvnw.net/jtv_user_pictures/69294edc-2348-478f-a1fc-937edf693aa7-profile_image-50x50.png',
  //   },
  // });
  // giveawayEntries.push({
  //   id: Math.random().toString(),
  //   type: GiveawayEvents.Enter,
  //   data: {
  //     username: 'p4nth3rb0t',
  //     logoUrl:
  //       'https://static-cdn.jtvnw.net/jtv_user_pictures/dc5efa29-bbe7-446a-b168-b78cebd7dc2b-profile_image-50x50.png',
  //   },
  // });
  // giveawayEntries.push({
  //   id: Math.random().toString(),
  //   type: GiveawayEvents.Enter,
  //   data: {
  //     username: 'p4nth3rb0t',
  //     logoUrl:
  //       'https://static-cdn.jtvnw.net/jtv_user_pictures/dc5efa29-bbe7-446a-b168-b78cebd7dc2b-profile_image-50x50.png',
  //   },
  // });
  // giveawayEntries.push({
  //   id: Math.random().toString(),
  //   type: GiveawayEvents.Enter,
  //   data: {
  //     username: 'p4nth3rb0t',
  //     logoUrl:
  //       'https://static-cdn.jtvnw.net/jtv_user_pictures/dc5efa29-bbe7-446a-b168-b78cebd7dc2b-profile_image-50x50.png',
  //   },
  // });
  // giveawayEntries.push({
  //   id: Math.random().toString(),
  //   type: GiveawayEvents.Enter,
  //   data: {
  //     username: 'p4nth3rb0t',
  //     logoUrl:
  //       'https://static-cdn.jtvnw.net/jtv_user_pictures/dc5efa29-bbe7-446a-b168-b78cebd7dc2b-profile_image-50x50.png',
  //   },
  // });
  // giveawayEntries.push({
  //   id: Math.random().toString(),
  //   type: GiveawayEvents.Enter,
  //   data: {
  //     username: 'p4nth3rb0t',
  //     logoUrl:
  //       'https://static-cdn.jtvnw.net/jtv_user_pictures/dc5efa29-bbe7-446a-b168-b78cebd7dc2b-profile_image-50x50.png',
  //   },
  // });
  // giveawayEntries.push({
  //   id: Math.random().toString(),
  //   type: GiveawayEvents.Enter,
  //   data: {
  //     username: 'p4nth3rb0t',
  //     logoUrl:
  //       'https://static-cdn.jtvnw.net/jtv_user_pictures/dc5efa29-bbe7-446a-b168-b78cebd7dc2b-profile_image-50x50.png',
  //   },
  // });
  // giveawayEntries.push({
  //   id: Math.random().toString(),
  //   type: GiveawayEvents.Enter,
  //   data: {
  //     username: 'p4nth3rb0t',
  //     logoUrl:
  //       'https://static-cdn.jtvnw.net/jtv_user_pictures/dc5efa29-bbe7-446a-b168-b78cebd7dc2b-profile_image-50x50.png',
  //   },
  // });

  // console.log(giveawayEntries);

  return (
    <>
      {!giveawayInProgress && (
        <>
          <GiveawayEntriesContainer>
            <GiveawayEntriesInnerContainer>
              <GiveawayTitle>
                <MajickPanther />
                <GiveawayTitleText>Giveaway in progress!</GiveawayTitleText>
                <PewPewPanther />
              </GiveawayTitle>
              {giveawayEntries.map((entry) => (
                <Entry key={entry.id}>
                  <EntryLogo src={entry.data.logoUrl} alt={entry.data.username} />
                  <EntryName>{entry.data.username}</EntryName>
                </Entry>
              ))}
              <GiveawayTitle>
                <MajickPanther />
                <GiveawayTitleText>Giveaway in progress!</GiveawayTitleText>
                <PewPewPanther />
              </GiveawayTitle>
            </GiveawayEntriesInnerContainer>
          </GiveawayEntriesContainer>

          {giveawayWinner.length > 0 && <h1>{giveawayWinner}</h1>}
        </>
      )}
    </>
  );
}
