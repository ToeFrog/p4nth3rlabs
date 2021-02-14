import React, { useContext, useState } from "react";
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

import {
  AlertContainer,
  AlertLogo,
  AlertNameContainer,
  AlertName,
  AlertBanner,
  AlertContainerInner,
} from "../alerts/index.style";
import BannerImage from "../alerts/svg/bannerImage";
import BannerTextPath from "../alerts/svg/bannerTextPath";
import { MainframeEvent } from "p4nth3rb0t-types";

interface GiveawayProps {}

export default function Giveaway(props: GiveawayProps) {
  const { state } = useContext(AppContext);
  const { giveawayEntries, giveawayWinner, giveawayInProgress, randomCongrats } = state;

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
        <div></div>
        // <audio autoPlay>
        //   <source src={process.env.REACT_APP_AUDIO_ALERT_GIVEAWAY_URL} type="audio/mp3" />
        // </audio>
      )}
      {giveawayInProgress && (
        <>
          <GiveawayEntriesContainer out={!giveawayInProgress}>
            {/* <audio autoPlay>
              <source src={process.env.REACT_APP_AUDIO_ALERT_GIVEAWAY_URL} type="audio/mp3" />
            </audio> */}
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

          {giveawayWinner.data.winner && (
            <AlertContainer key={giveawayWinner.id}>
              {/* <audio autoPlay>
                <source src={process.env.REACT_APP_AUDIO_ALERT_GIVEAWAY_URL} type="audio/mp3" />
              </audio> */}
              <AlertContainerInner>
                <AlertLogo src={giveawayWinner.data.logoUrl} alt={giveawayWinner.data.winner} />
                <AlertBanner>
                  <BannerImage />
                  <BannerTextPath displayText="Winner!" />
                </AlertBanner>
              </AlertContainerInner>

              <AlertNameContainer alertType={MainframeEvent.drawGiveaway}>
                <AlertName>
                  {randomCongrats}, {giveawayWinner.data.winner}!
                </AlertName>
              </AlertNameContainer>
            </AlertContainer>
          )}
        </>
      )}
    </>
  );
}
