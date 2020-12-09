import React from 'react';
import styled, { keyframes } from 'styled-components';
import Lightening from './svg/lightening';
import Discord from './svg/discord';
import Twitter from './svg/twitter';
import Github from './svg/github';

interface IconProps {
  iconName: string;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
}`;

const IconContainer = styled.span`
  display: flex;
  height: 24px;
  width: 24px;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 2s ease-in-out;
`;

export default function Icon(props: IconProps) {
  const { iconName } = props;
  switch (iconName) {
    case 'github':
      return (
        <IconContainer>
          <Github />
        </IconContainer>
      );
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
