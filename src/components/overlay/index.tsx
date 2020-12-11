import React, { useEffect, useState } from 'react';
import Icon from './TextBoxIcons';
import {
  FooterContainer,
  TextBox,
  TextBoxText,
  TextBoxLeft,
  TextBoxRight,
  TextBoxContainer,
  FireIconContainer,
  LighteningIconContainer,
  ExtraStarsContainer,
  PewCoinContainer,
  HeartPantherContainer,
  MajickPantherContainer,
  PewPewPantherContainer,
} from './index.style';

import HeartPanther from './svg/HeartPanther';
import MajickPanther from './svg/MajickPanther';
import PewPewPanther from './svg/PewPewPanther';
import PewCoin from './svg/PewCoin';
import Fire from './svg/Fire';
import Lightening from './svg/Lightening';
import ExtraStars from './svg/ExtraStars';

interface OverlayProps {}

interface TextBoxOption {
  text: string;
  iconName: string;
  type: string;
}

const textBoxOptions: TextBoxOption[] = [
  {
    text: 'Build stuff, learn things, love what you do',
    iconName: 'lightening',
    type: 'slogan',
  },
  {
    text: '!twitter - @whitep4nth3r',
    iconName: 'twitter',
    type: 'twitter',
  },
  {
    text: '!discord - Join our Discord community',
    iconName: 'discord',
    type: 'discord',
  },
  {
    text: '!github - Find stream projects on github',
    iconName: 'github',
    type: 'github',
  },
];

export default function Overlay(props: OverlayProps) {
  const [textBoxCurrentKey, setTextBoxCurrentKey] = useState(0);
  const [textBox, setTextBox] = useState(textBoxOptions[textBoxCurrentKey]);
  const atEndOfOptions = textBoxCurrentKey + 1 > textBoxOptions.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      const newKey = atEndOfOptions ? (0 as number) : ((textBoxCurrentKey + 1) as number);
      setTextBoxCurrentKey(newKey);
      setTextBox(textBoxOptions[newKey]);
    }, 30000);
    return () => clearInterval(interval);
  }, [textBoxCurrentKey, atEndOfOptions]);

  return (
    <FooterContainer>
      <FireIconContainer>
        <Fire />
      </FireIconContainer>

      <LighteningIconContainer>
        <Lightening />
      </LighteningIconContainer>

      <PewCoinContainer>
        <PewCoin />
      </PewCoinContainer>

      <ExtraStarsContainer>
        <ExtraStars />
      </ExtraStarsContainer>

      <HeartPantherContainer
        animate={{
          rotate: [7, 7, 7],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          times: [0, 0.5, 1],
          loop: Infinity,
        }}
      >
        <HeartPanther />
      </HeartPantherContainer>

      <MajickPantherContainer
        animate={{
          rotate: [-14, -14, -14],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          times: [0, 0.5, 1],
          loop: Infinity,
        }}
      >
        <MajickPanther />
      </MajickPantherContainer>

      <PewPewPantherContainer
        animate={{
          rotate: [8, 8, 8],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          times: [0, 0.5, 1],
          loop: Infinity,
        }}
      >
        <PewPewPanther />
      </PewPewPantherContainer>

      <TextBoxContainer>
        <TextBoxLeft />
        <TextBox key={`item-${textBoxCurrentKey}`} type={textBox.type}>
          <Icon iconName={textBox.iconName}></Icon>
          <TextBoxText>{textBox.text}</TextBoxText>
        </TextBox>
        <TextBoxRight />
      </TextBoxContainer>
    </FooterContainer>
  );
}
