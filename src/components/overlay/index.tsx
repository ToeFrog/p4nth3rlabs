import React, { useEffect, useState } from 'react';
import Icon from './icon';
import {
  FooterContainer,
  TextBox,
  TextBoxText,
  TextBoxLeft,
  TextBoxRight,
  TextBoxContainer,
} from './index.style';

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
  const [textBox, setTextBox] = useState(textBoxOptions[0]);
  const [textBoxCurrentKey, setTextBoxCurrentKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextBoxCurrentKey(
        textBoxCurrentKey + 1 > textBoxOptions.length - 1 ? 0 : textBoxCurrentKey + 1,
      );
      setTextBox(textBoxOptions[textBoxCurrentKey]);
    }, 30000);
    return () => clearInterval(interval);
  }, [textBoxCurrentKey]);

  return (
    <FooterContainer>
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
