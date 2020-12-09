import styled, { keyframes, css } from 'styled-components';

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
  position: relative;
  background-image: url('/assets/footer-bar.png');
  background-size: cover;
  height: 100vh;
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

const TextBoxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: ${textBoxHeight};
  left: 1205px;
  top: 1002px;
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
  width: ${textBoxBorderRadius};
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${textBoxBorderRadius} 0 0 ${textBoxBorderRadius};
  background-color: var(--black);
`;
const TextBoxRight = styled.span`
  width: ${textBoxBorderRadius};
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
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

export { FooterContainer, TextBox, TextBoxText, TextBoxLeft, TextBoxRight, TextBoxContainer };
