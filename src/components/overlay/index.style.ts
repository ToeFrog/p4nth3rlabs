import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

const textBoxWidths = {
  github: '400px',
  twitter: '276px',
  discord: '380px',
  slogan: '432px',
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
}`;

const FooterContainer = styled.div`
  display: block;
  position: fixed;
  background-image: url('/assets/footer-bar.png');
  background-size: cover;
  height: 1080px;
  width: 1920px;
`;

interface TextBoxProps {
  type: string;
}

function getWidthFromType(props: TextBoxProps) {
  const { type } = props;

  switch (type) {
    case 'twitter':
      return textBoxWidths.twitter;
    case 'discord':
      return textBoxWidths.discord;
    case 'github':
      return textBoxWidths.github;
    case 'slogan':
      return textBoxWidths.slogan;
  }
}

function getGrowAnimation(props: TextBoxProps) {
  const { type } = props;
  switch (type) {
    case 'twitter':
      return keyframes`
      from { width: 0; }
      to { width: ${textBoxWidths.twitter}; }
    `;
    case 'discord':
      return keyframes`
      from { width: 0; }
      to { width: ${textBoxWidths.discord}; }
    `;
    case 'github':
      return keyframes`
      from { width: 0; }
      to { width: ${textBoxWidths.github}; }
    `;
    case 'slogan':
      return keyframes`
      from { width: 0; }
      to { width: ${textBoxWidths.slogan}; }
    `;
  }
}

const textBoxHeight = '36px';
const textBoxBorderRadius = '8px';
const textBoxSideWidth = '12px';

const TextBoxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: ${textBoxHeight};
  left: 1205px;
  top: 1002px;
  max-width: fit-content;
  overflow: hidden;
  background: transparent;
  border-radius: ${textBoxBorderRadius};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const TextBox = styled.div<TextBoxProps>`
  animation: ${(props) => getGrowAnimation(props)} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  overflow: hidden;
  background-color: var(--black);
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  height: ${textBoxHeight};
  width: ${(props) => getWidthFromType(props)};
`;

const TextBoxLeft = styled.span`
  width: ${textBoxSideWidth};
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  border-radius: ${textBoxBorderRadius} 0 0 ${textBoxBorderRadius};
  background-color: var(--black);
`;

const TextBoxRight = styled.span`
  width: ${textBoxSideWidth};
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  overflow: hidden;
  align-items: center;
  border-radius: 0 ${textBoxBorderRadius} ${textBoxBorderRadius} 0;
  background-color: var(--black);
  position: relative;
  left: -1px;
`;

const TextBoxText = styled.span`
  animation: ${fadeIn} 3s ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-delay: 1s;
  overflow: hidden;
  opacity: 0;
  white-space: nowrap;
  color: var(--white);
  font-family: var(--font-family-main);
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
`;

const svgDropShadow = css`
  filter: drop-shadow(6px 10px 3px rgba(0, 0, 0, 0.22));
`;

const FireIconContainer = styled(motion.span)`
  position: absolute;
  display: inline-block;
  width: 24px;
  height: 31px;
  left: 8px;
  top: 997px;
  transform: rotate(-11deg);

  svg {
    ${svgDropShadow}
  }
`;

const LighteningIconContainer = styled(motion.span)`
  position: absolute;
  display: inline-block;
  width: 16px;
  height: 27px;
  left: 21px;
  bottom: 8px;
  transform: rotate(-17deg);

  svg {
    ${svgDropShadow}
  }
`;

const PewCoinContainer = styled(motion.span)`
  display: inline-block;
  position: absolute;
  width: 18px;
  height: 18px;
  left: 276px;
  bottom: 10px;
  transform: rotate(12deg);

  svg {
    ${svgDropShadow}
  }
`;

const ExtraStarsContainer = styled.span`
  display: inline-block;
  position: absolute;
  left: 110px;
  bottom: 8px;
  width: 49px;
  height: 55px;

  svg {
    ${svgDropShadow}
  }
`;

const HeartPantherContainer = styled(motion.span)`
  position: absolute;
  display: inline-block;
  width: 92px;
  height: 92px;
  left: 34px;
  top: 969px;
  transform: rotate(7deg);

  svg {
    ${svgDropShadow}
  }
`;

const MajickPantherContainer = styled(motion.span)`
  position: absolute;
  display: inline-block;
  width: 126px;
  height: 126px;
  left: 140px;
  top: 948px;
  transform: rotate(-14deg);

  svg {
    ${svgDropShadow}
  }
`;

const PewPewPantherContainer = styled(motion.span)`
  position: absolute;
  display: inline-block;
  width: 234px;
  height: 130px;
  left: 240px;
  top: 956px;
  transform: rotate(8deg);

  svg {
    ${svgDropShadow}
  }
`;

export {
  FooterContainer,
  TextBox,
  TextBoxText,
  TextBoxLeft,
  TextBoxRight,
  TextBoxContainer,
  FireIconContainer,
  LighteningIconContainer,
  PewCoinContainer,
  ExtraStarsContainer,
  HeartPantherContainer,
  MajickPantherContainer,
  PewPewPantherContainer,
};
