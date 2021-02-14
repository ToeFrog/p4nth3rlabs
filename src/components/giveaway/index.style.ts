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

const blinker = keyframes`
  50% {
    opacity: 0;
  }
`;

const GiveawayTitle = styled.div`
  animation: ${blinker} 1s linear infinite;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
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

export {
  GiveawayEntriesContainer,
  GiveawayEntriesInnerContainer,
  GiveawayEntriesNameContainer,
  GiveawayTitle,
  GiveawayTitleText,
  Entry,
  EntryLogo,
  EntryName,
};
