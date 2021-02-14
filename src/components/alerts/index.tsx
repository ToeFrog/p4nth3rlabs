import React, { Dispatch } from "react";
import {
  AlertContainer,
  AlertLogo,
  AlertNameContainer,
  AlertName,
  AlertBanner,
  AlertContainerInner,
} from "./index.style";
import BannerImage from "./svg/bannerImage";
import BannerTextPath from "./svg/bannerTextPath";
import { useAlertQueue } from "../../AlertQueue";
import { debugAlert } from "./debug";
import { AlertQueueEvent } from "../../AppContext";
import { MainframeEvent } from "p4nth3rb0t-types";

interface AlertProps {
  dispatch: Dispatch<any>;
}

function getRandomCongrats(username: string): string {
  const congrats = [
    `Congratulations, ${username}!`,
    `Well done, ${username}!`,
    `You're a winner, ${username}!`,
    `Good work, ${username}!`,
    `Lucky you, ${username}!`,
    `[object Object], ${username}!`,
    `${username}, you won!`,
    `Huzzah, ${username}! You won!`,
  ];

  return congrats[Math.floor(Math.random() * congrats.length)];
}

function getBannerText(alert: AlertQueueEvent): any {
  switch (alert.event) {
    case MainframeEvent.drawGiveaway:
      return {
        banner: "Winner",
        footer: `${getRandomCongrats(alert.data.winner)}`,
        imgAlt: alert.data.winner,
        logoUrl: alert.data.logoUrl,
      };
    case MainframeEvent.follow:
      return {
        banner: "New follower",
        footer: alert.data.followerName,
        imgAlt: alert.data.followerName,
        logoUrl: alert.data.logoUrl,
      };
    case MainframeEvent.raid:
      return {
        banner: "It's a raid!",
        footer: `${alert.data.raider} is raiding with ${alert.data.raiderCount} viewers!`,
        imgAlt: alert.data.raider,
        logoUrl: alert.data.logoUrl,
      };
    case MainframeEvent.cheer:
      return {
        banner: `Bits! Cheers!`,
        footer: `${alert.data.bitCount} bit${+alert.data.bitCount > 1 ? "s" : ""} from ${
          alert.data.cheererName
        }!`,
        imgAlt: alert.data.cheererName,
        logoUrl: alert.data.logoUrl,
      };
    case MainframeEvent.sub:
      let tierText =
        alert.data.subTier === "Prime" ? "with Twitch Prime" : `at Tier ${alert.data.subTier}`;
      return {
        banner: alert.data.months > 0 ? `Resub!` : `New sub!`,
        footer: `${alert.data.subscriberUsername} has ${
          alert.data.months > 0 ? "re" : ""
        }subscribed ${tierText}!`,
        imgAlt: alert.data.subscriberUsername,
        logoUrl: alert.data.logoUrl,
      };
    default:
      return {
        banner: "default",
        footer: "default",
        imgAlt: "default",
        logoUrl: "default",
      };
  }
}

function getAlertAudioUrl(type: MainframeEvent) {
  switch (type) {
    case MainframeEvent.drawGiveaway:
      return process.env.REACT_APP_AUDIO_ALERT_GIVEAWAY_URL;
    case MainframeEvent.follow:
      return process.env.REACT_APP_AUDIO_ALERT_FOLLOW_URL;
    case MainframeEvent.raid:
      return process.env.REACT_APP_AUDIO_ALERT_RAID_URL;
    case MainframeEvent.cheer:
      return process.env.REACT_APP_AUDIO_ALERT_CHEER_URL;
    case MainframeEvent.sub:
      return process.env.REACT_APP_AUDIO_ALERT_SUB_URL;
    default:
      return process.env.REACT_APP_AUDIO_ALERT_FOLLOW_URL;
  }
}

export default function Alert(props: AlertProps) {
  const debug = false;
  let alert = useAlertQueue(props.dispatch);
  if (debug) {
    alert = debugAlert as any;
  }

  if (!alert) {
    return null;
  }

  const displayText = getBannerText(alert);
  const alertAudioUrl = getAlertAudioUrl(alert.event);

  return (
    <AlertContainer key={alert.id}>
      <audio autoPlay>
        <source src={alertAudioUrl} type="audio/mp3" />
      </audio>
      <AlertContainerInner>
        <AlertLogo src={displayText.logoUrl} alt={displayText.imgAlt} />
        <AlertBanner>
          <BannerImage />
          <BannerTextPath displayText={displayText.banner} />
        </AlertBanner>
      </AlertContainerInner>

      <AlertNameContainer alertType={alert.event}>
        <AlertName>{displayText.footer}</AlertName>
      </AlertNameContainer>
    </AlertContainer>
  );
}
