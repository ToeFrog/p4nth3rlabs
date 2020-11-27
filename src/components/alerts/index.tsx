import React, { Dispatch } from 'react';
import {
  AlertContainer,
  AlertLogo,
  AlertNameContainer,
  AlertName,
  AlertBanner,
} from './index.style';
import BannerImage from './svg/bannerImage';
import BannerTextPath from './svg/bannerTextPath';
import { AlertNames } from './types';
import { useAlertQueue } from '../../AlertQueue';
import { debugAlert } from './debug'

interface AlertProps {
  dispatch: Dispatch<any>;
}

function getBannerText(alert: any): any {
  switch (alert.type) {
    case AlertNames.Follow:
      return {
        banner: 'New follower',
        footer: alert.data.followerName,
        imgAlt: alert.data.followerName,
        logoUrl: alert.data.logoUrl,
      };
    case AlertNames.Raid:
      return {
        banner: "It's a raid!",
        footer: `${alert.data.raider} is raiding with ${alert.data.raiderCount} viewers!`,
        imgAlt: alert.data.raider,
        logoUrl: alert.data.logoUrl,
      };
    case AlertNames.Cheer:
      return {
        banner: `Bits! Cheers!`,
        footer: `${alert.data.bitCount} bit${alert.data.bitCount > 1?'s':''} from ${alert.data.cheererName}!`,
        imgAlt: alert.data.cheererName,
        logoUrl: alert.data.logoUrl,
      };
    case AlertNames.Sub:
      let tierText = (alert.data.subTier === 'Prime') ? 'with Twitch Prime' : `at Tier ${alert.data.subTier}`;
      return {
        banner: alert.data.months > 0 ? `Resub!` : `New sub!`,
        footer: `${alert.data.subscriberUsername} has ${alert.data.months > 0 ? 're' : ''}subscribed ${tierText}!`,
        imgAlt: alert.data.subscriberUsername,
        logoUrl: alert.data.logoUrl,
      };
    default:
      return {
        banner: 'default',
        footer: 'default',
        imgAlt: 'default',
        logoUrl: 'default',
      };
  }
}

export default function Alert(props: AlertProps) {
  const debug = false;
  let alert = useAlertQueue(props.dispatch);
  if (debug) alert = debugAlert;
  if (!alert) return null;
  const displayText = debug ? getBannerText(debugAlert) : getBannerText(alert);

  return (
      <AlertContainer key={alert.id}>
        <audio autoPlay>
          <source src={`./audio/${alert.type}.mp3`} type="audio/mp3" />
        </audio>
        <AlertBanner>
          <BannerImage />
          <BannerTextPath displayText={displayText.banner} />
        </AlertBanner>
        
        <AlertLogo src={displayText.logoUrl} alt={displayText.imgAlt} />
        
        <AlertNameContainer>
          <AlertName>{displayText.footer}</AlertName>
        </AlertNameContainer>
      </AlertContainer>
  );
}