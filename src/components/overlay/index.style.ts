import styled from 'styled-components';

const FooterContainer = styled.div`
  display: block;
  position: relative;
  background-image: url('/assets/footer-bar.png');
  background-size: cover;
  height: 100vh;
`;

const TextBox = styled.div`
  background-color: var(--black);
  border-radius: 8px;
  position: relative;
  padding: 4px 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 1205px;
  top: 1012px;
`;

const TextBoxText = styled.span`
  color: var(--white);
  font-family: var(--font-family-main);
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;

export { FooterContainer, TextBox, TextBoxText };
