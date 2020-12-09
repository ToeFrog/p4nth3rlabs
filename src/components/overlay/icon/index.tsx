import React from 'react';
import styled from 'styled-components';
import Lightening from './svg/lightening';
import Discord from './svg/discord';
import Twitter from './svg/twitter';

interface IconProps {
  iconName: string;
}

const IconContainer = styled.span`
  display: flex;
  height: 24px;
  width: 24px;
  margin-right: 8px;
`;

export default function Icon(props: IconProps) {
  const { iconName } = props;
  switch (iconName) {
    case 'lightening':
      return (
        <IconContainer>
          <Lightening />
        </IconContainer>
      );
    case 'discord':
      return (
        <IconContainer>
          <Discord />
        </IconContainer>
      );
    case 'twitter':
      return (
        <IconContainer>
          <Twitter />
        </IconContainer>
      );
    default:
      return <></>;
  }
}
