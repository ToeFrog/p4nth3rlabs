import styled, { keyframes, css } from "styled-components";

const fallDown = keyframes`
  0% { 
    transform: translateY(-100%); 		
  }
  100% { 
    transform: translateY(0); 
  }
`;

const fallUp = keyframes`
  0% { 
    transform: translateY(0); 		
  }
  100% { 
    transform: translateY(-100%); 
  }
`;

interface GiveawayEntriesContainerProps {
  out: boolean;
}

const GiveawayEntriesContainer = styled.div<GiveawayEntriesContainerProps>`
  position: absolute;
  z-index: 2;
  width: 1920px;
  background-color: var(--black);
  overflow: hidden;
  transform: translateY(0);
  box-shadow: 0rem 0.6rem 1rem -0.4rem var(--black);
  animation: ${(props) =>
    props.out
      ? css`
          ${fallUp} 1s ease-in-out forwards
        `
      : css`
          ${fallDown} 1s ease-in-out forwards
        `};
`;

const GiveawayEntriesInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 1rem;
  height: 3.5rem;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const GiveawayEntriesNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;

const bounce = keyframes`
  0% { 
    transform: translateY(-7px); 
  }
  1% {
    transform: translateY(7px); 
  }
  2% {
    transform: translateY(-3px); 
  }
  4% {
    transform: translateY(3px); 
  }
  5% {
    transform: translateY(-1px); 
  }
  6% {
    transform: translateY(1px); 
  }
  7% {
    transform: translateY(-3px); 
  }
  8% {
    transform: translateY(3px); 
  }
  9% {
    transform: translateY(7px); 
  }
  10% {
    transform: translateY(-7px); 
  }
  11% {
    transform: translateY(0); 
  }
  100% {
    transform: translateY(0); 
  }
`;

const shake = keyframes`
  2% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  4% {
    transform: translate(0px, 1px) rotate(0.5deg);
  }
  6% {
    transform: translate(0px, 1px) rotate(0.5deg);
  }
  8% {
    transform: translate(1px, 0px) rotate(0.5deg);
  }
  10% {
    transform: translate(0px, 0px) rotate(0.5deg);
  }
  12% {
    transform: translate(1px, 0px) rotate(0.5deg);
  }
  14% {
    transform: translate(1px, 0px) rotate(0.5deg);
  }
  16% {
    transform: translate(0px, 1px) rotate(0.5deg);
  }
  18% {
    transform: translate(0px, 1px) rotate(0.5deg);
  }
  20% {
    transform: translate(0px, 1px) rotate(0.5deg);
  }
  22% {
    transform: translate(0px, 1px) rotate(0.5deg);
  }
  24% {
    transform: translate(0px, 0px) rotate(0.5deg);
  }
  26% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  28% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  30% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  32% {
    transform: translate(1px, 0px) rotate(0.5deg);
  }
  34% {
    transform: translate(0px, 1px) rotate(0.5deg);
  }
  36% {
    transform: translate(0px, 1px) rotate(0.5deg);
  }
  38% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  40% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  42% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  44% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  46% {
    transform: translate(1px, 0px) rotate(0.5deg);
  }
  48% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  50% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  52% {
    transform: translate(1px, 0px) rotate(0.5deg);
  }
  54% {
    transform: translate(0px, 1px) rotate(0.5deg);
  }
  56% {
    transform: translate(0px, 0px) rotate(0.5deg);
  }
  58% {
    transform: translate(0px, 0px) rotate(0.5deg);
  }
  60% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  62% {
    transform: translate(0px, 0px) rotate(0.5deg);
  }
  64% {
    transform: translate(1px, 0px) rotate(0.5deg);
  }
  66% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  68% {
    transform: translate(1px, 0px) rotate(0.5deg);
  }
  70% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  72% {
    transform: translate(0px, 0px) rotate(0.5deg);
  }
  74% {
    transform: translate(1px, 0px) rotate(0.5deg);
  }
  76% {
    transform: translate(0px, 1px) rotate(0.5deg);
  }
  78% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  80% {
    transform: translate(0px, 0px) rotate(0.5deg);
  }
  82% {
    transform: translate(1px, 0px) rotate(0.5deg);
  }
  84% {
    transform: translate(0px, 0px) rotate(0.5deg);
  }
  86% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  88% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  90% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  92% {
    transform: translate(0px, 0px) rotate(0.5deg);
  }
  94% {
    transform: translate(1px, 1px) rotate(0.5deg);
  }
  96% {
    transform: translate(0px, 1px) rotate(0.5deg);
  }
  98% {
    transform: translate(0px, 0px) rotate(0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0);
  }
`;

const GiveawayTitle = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  animation: ${bounce} 10s linear infinite;
`;

const GiveawayTitleText = styled.h1`
  font-size: 1.4rem;
  line-height: 1;
  font-family: var(--font-family-main);
  color: var(--yellow);
  font-weight: var(--font-weight-bold);
  margin: 0 0.5rem;
  width: max-content;
`;

const Entry = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const EntryLogo = styled.img`
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  border: 0.125rem solid var(--yellow);
`;

const EntryName = styled.span`
  color: var(--white);
  margin-right: 1rem;
  font-size: 1.4rem;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  font-family: var(--font-family-main);
`;

const PantherContainer = styled.span`
  animation: ${shake};
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

export {
  GiveawayEntriesContainer,
  GiveawayEntriesInnerContainer,
  GiveawayEntriesNameContainer,
  GiveawayTitle,
  GiveawayTitleText,
  Entry,
  EntryLogo,
  EntryName,
  PantherContainer,
};
