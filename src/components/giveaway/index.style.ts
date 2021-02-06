import styled, { keyframes } from 'styled-components';

const scrollLeft = keyframes`
  0% { 
    transform: translateX(100%); 		
  }
  100% { 
    transform: translateX(-100%); 
  }
`;

const fallDown = keyframes`
  0% { 
    transform: translateY(-100%); 		
  }
  100% { 
    transform: translateY(0); 
  }
`;

const GiveawayEntriesContainer = styled.div`
  width: 1920px;
  background-color: var(--black);
  overflow: hidden;
  transform: translateY(0);
  box-shadow: 0rem 0.6rem 1rem -0.4rem var(--black);
  animation ${fallDown} 1s ease-in-out forwards;
`;

const GiveawayEntriesInnerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 0.75rem;
  flex-wrap: nowrap;
  overflow: visible;
  transform: translateX(100%);
  animation: ${scrollLeft} 20s linear infinite;
`;

const GiveawayTitle = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const GiveawayTitleText = styled.h1`
  font-size: 1rem;
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
  font-size: 1rem;
  line-height: 1;
  font-family: var(--font-family-main);
`;

export {
  GiveawayEntriesContainer,
  GiveawayEntriesInnerContainer,
  GiveawayTitle,
  GiveawayTitleText,
  Entry,
  EntryLogo,
  EntryName,
};
