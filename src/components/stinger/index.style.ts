import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";

const slideInRight = keyframes`
  0% {
    transform: translate3d(-100%,0,0);
  }
  100% {
    transform: none;
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

export enum BannerTypes {
  Top = "top",
  Middle = "middle",
  Bottom = "bottom",
}

function getBannerHeight(type: string): any {
  let height;
  switch (type) {
    case BannerTypes.Top:
      height = "10%";
      break;
    case BannerTypes.Middle:
      height = "20%";
      break;
    case BannerTypes.Bottom:
      height = "10%;";
      break;
    default:
      height = "20%";
  }

  return css`
    height: ${height};
  `;
}

function getBannerBackgroundCss(type: string): any {
  let color;
  switch (type) {
    case BannerTypes.Top:
      color = "yellow";
      break;
    case BannerTypes.Middle:
      color = "red";
      break;
    case BannerTypes.Bottom:
      color = "yellow";
      break;
    default:
      color = "red";
  }

  return css`
    background-color: var(--${color});
    background-image: url("/assets/bg-${color}.png");
  `;
}

const Container = styled.div`
  position: fixed;
  background-size: cover;
  height: 1080px;
  width: 1920px;
  display: flex;
`;

const InnerContainer = styled.div`
  background-color: var(--black);
  animation: ${slideInRight} 0.3s var(--cb-animation) forwards;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;

interface BannerProps {
  type: string;
  delay?: string;
}

const Banner = styled(motion.div)<BannerProps>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  transform: translate3d(-100%, 0, 0);
  animation: ${slideInRight} 0.5s var(--cb-animation) forwards,
    ${bounceInRight} 1s var(--cb-animation);
  animation-delay: ${(props) => props.delay}s;
  ${(props) => getBannerBackgroundCss(props.type)}
  ${(props) => getBannerHeight(props.type)}
`;

const TitleText = styled.h1`
  font-family: var(--font-family-main);
  font-size: 4rem;
  line-height: 1.3;
  font-weight: var(--font-weight-bold);
  color: var(--white);
  text-shadow: 0.125rem 0.125rem 6px var(--black);
`;

export { Container, InnerContainer, Banner, TitleText };
