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
    // case AlertNames.Cheer:
    //   return {
    //     banner: `Bits! Cheers!`,
    //     footer: `${data.alert.data.bitCount} bits from ${data.alert.data.cheererName}!`,
    //     imgAlt: data.alert.data.cheererName,
    //     logoUrl: data.alert.data.logoUrl,
    //   };
    // case AlertNames.Sub:
    //   return {
    //     banner: `New sub!`,
    //     footer: `..........`,
    //     imgAlt: '.......',
    //     logoUrl: data.alert.data.logoUrl,
    //   };
    case 'debug':
      return {
        banner: 'New sub!',
        footer: 'Madhouse steve just subscribed!',
        imgAlt: 'whitep4nth3r',
        logoUrl:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/69ade2a2-82e1-477c-afc6-43582bf2844c-profile_image-300x300.png',
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
  let debugAlert = {
    type: 'debug',
  };

  const alert = useAlertQueue(props.dispatch);
  if (!alert && !debug) return null;
  let displayText = debug ? getBannerText(debugAlert) : getBannerText(alert);

  return (
    <>
      <AlertContainer>
        <AlertBanner>
          <BannerImage />
          <BannerTextPath displayText={displayText.banner} />
        </AlertBanner>

        <AlertLogo src={displayText.logoUrl} alt={displayText.imgAlt} />

        <AlertNameContainer>
          <AlertName>{displayText.footer}</AlertName>
        </AlertNameContainer>
      </AlertContainer>
    </>
  );
}
