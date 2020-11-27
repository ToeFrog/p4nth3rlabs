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
        banner: 'whitep4nth3r',
        footer: 'eeeeeee',
        imgAlt: 'whitep4nth3r',
        logoUrl:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/69ade2a2-82e1-477c-afc6-43582bf2844c-profile_image-300x300.png',
      };
    default:
      return {
        banner: 'whitep4nth3r',
        footer: 'eeeeeee',
        imgAlt: 'whitep4nth3r',
        logoUrl:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/69ade2a2-82e1-477c-afc6-43582bf2844c-profile_image-300x300.png',
      };
  }
}

export default function Alert(props: AlertProps) {
  const alert = useAlertQueue(props.dispatch);
  if (!alert) return null;
  let displayText = getBannerText(alert);

  const debug = false;
  let debugAlert = {
    type: 'debug',
  };
  let debugText = getBannerText(debugAlert);

  return (
    <>
      {debug && (
        <AlertContainer>
          <AlertBanner>
            <BannerImage />
            <BannerTextPath displayText={debugText.banner} />
          </AlertBanner>

          <AlertLogo src={debugText.logoUrl} alt={debugText.imgAlt} />

          <AlertNameContainer>
            <AlertName>{debugText.footer}</AlertName>
          </AlertNameContainer>
        </AlertContainer>
      )}
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
