import React, { useEffect, useState } from 'react';
import Icon from './icon';
import { FooterContainer, TextBox, TextBoxText } from './index.style';

interface OverlayProps {}

interface TextBoxOption {
  text: string;
  iconName: string;
}

const textBoxOptions: TextBoxOption[] = [
  {
    text: 'Build stuff, learn things, love what you do.',
    iconName: 'lightening',
  },
  {
    text: '!twitter - @whitep4nth3r',
    iconName: 'twitter',
  },
  {
    text: '!discord - Join our Discord community, The Claw',
    iconName: 'discord',
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
    }, 2000);
    return () => clearInterval(interval);
  }, [textBoxCurrentKey]);

  return (
    <FooterContainer>
      <TextBox>
        <Icon iconName={textBox.iconName}></Icon>
        <TextBoxText>{textBox.text}</TextBoxText>
      </TextBox>
    </FooterContainer>
  );
}
