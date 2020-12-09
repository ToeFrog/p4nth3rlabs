import React from 'react';
import { FooterContainer, TextBox } from './index.style';

interface OverlayProps {}

export default function Overlay(props: OverlayProps) {
  const textBoxText = [
    {
      text: 'Build stuff, learn things, love what you do.',
      icon: '',
    },
    {
      text: 'Twitter | @whitep4nth3r',
      icon: '',
    },
  ];

  return (
    <FooterContainer>
      <TextBox>{textBoxText[1].text}</TextBox>
    </FooterContainer>
  );
}
