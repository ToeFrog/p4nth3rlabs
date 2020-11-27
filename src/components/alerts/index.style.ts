import styled, { keyframes, css } from 'styled-components';

const doAnimation = true;

const dropDownBounce = keyframes`
  0% { 
    transform: scale(1,1) translateY(-100%); 
  }
  10% { 
    transform: translateY(0); 
  }
  30% { 
    transform: translateY(-100px); 
  }
  50% { 
    transform: translateY(0); 
  }
  57% { 
    transform: translateY(-7px); 
  }
  64% { 
    transform: translateY(0); 
  }
  100% { 
    transform: translateY(0); 
  }
`;

const swoopUp = keyframes`
    0% {
      transform: translateY(0);
    }
    100% {
      transform: scale(1,1) translateY(-100%); ;
    }
  `;

const bounceInRight = keyframes`
  0% { 
    transform: translate3d(100%,0,0) scale(1,1) translateX(0); 
  }
  10% { 
    transform: scale(1.1,.9) translateX(0); 
  }
  30% { 
    transform: scale(.9,1.1) translateX(-100px); 
  }
  50% { 
    transform: scale(1,1) translateX(0); 
  }
  57% { 
    transform: scale(1,1) translateX(-7px); 
  }
  64% { 
    transform: scale(1,1) translateX(0); 
  }
  100% { 
    transform: translate3d(0,0,0) scale(1,1) translateX(0); 
  }
`;

const slideOutLeft = keyframes`
  0% {
    transform: none;
  }
  100% {
    transform: translate3d(-100%,0,0);
  }
`;

const growAndRotate = keyframes`
  0% {
    width: 0;
    transform: rotate(360deg)  translateY(-200px);
  }
  100% {
    width: 300px;
    transform: none;
  }
`;

const shrinkAndRotateAndUp = keyframes`
  0% {
    width: 300px;
    transform: none;
  }
  100% {
    width: 0;
    transform: rotate(360deg) translateY(-200px);
  }
`;

const scrollUpSlowly = keyframes`
  0% {
    background-position: center 0;
  }
  100% {
    background-position: center -160px;
  }
`;

const AlertContainer = styled.div`
  text-align: center;
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

const AlertLogo = styled.img`
  ${doAnimation
    ? css`
        animation: ${growAndRotate} 0.6s var(--cb-animation),
          ${shrinkAndRotateAndUp} 0.5s ease var(--alert-display-time) forwards;
      `
    : ''}

  margin-left: auto;
  margin-right: auto;
  display: flex;
  left: 0;
  right: 0;
  top: 60px;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  background-color: var(--black);
  padding: 1rem;
  border: 0.5rem solid var(--yellow);
`;

const AlertNameContainer = styled.h1`
  ${doAnimation
    ? css`
        animation: ${bounceInRight} 1s var(--cb-animation),
          ${scrollUpSlowly} 20s var(--cb-animation),
          ${slideOutLeft} 0.5s ease var(--alert-display-time) forwards;
      `
    : ''}
  margin-left: auto;
  margin-right: auto;
  display: block;
  border-top: 6px solid var(--black);
  border-bottom: 6px solid var(--black);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 38%;
  padding: 3rem 1.25rem 1rem 1.25rem;
  background-color: var(--red);
  background-image: url('/assets/bg-red.svg');
  background-size: cover;
`;

const AlertName = styled.span`
  font-family: var(--font-family-alt);
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  color: var(--white);
  text-shadow: 0.125rem 0.125rem 6px var(--black);
`;

const AlertBanner = styled.div`
  ${doAnimation
    ? css`
        animation: ${dropDownBounce} 0.8s ease-in-out,
          ${swoopUp} 0.5s ease var(--alert-display-time) forwards;
      `
    : ''}
  width: 100%;
  z-index: 2;
`;

//alert__subtitle in global styles
//alert__bannerTextPath in global styles
//alert__bannerImage in global styles

export { AlertContainer, AlertLogo, AlertNameContainer, AlertName, AlertBanner };
