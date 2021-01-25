import React from "react";
import { useLocation } from "react-router-dom";
import { Container, InnerContainer, TitleText, Banner, Panther, StreamerName } from "./index.style";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const calculateDelayTime = (baseDelay: number, queryDelay: string | null): string => {
  return queryDelay ? (baseDelay + parseInt(queryDelay, 10)).toString() : baseDelay.toString();
};

interface StingerProps {}

export default function Stinger(props: StingerProps) {
  let query = useQuery();
  const title = query.get("title");
  const delayTimeIn = query.get("delayTimeIn");
  const delayTimeOut = query.get("delayTimeOut");
  const panther = query.get("panther");

  return (
    <Container>
      <InnerContainer animationDelay={delayTimeIn}>
        <Panther src={`./assets/svgs/panthers/${panther}.svg`} />
        <Banner type="top" delay={calculateDelayTime(0, delayTimeIn)} />
        <Banner type="center" delay={calculateDelayTime(0.5, delayTimeIn)}>
          <TitleText>{title}</TitleText>
        </Banner>
        <Banner type="bottom" delay={calculateDelayTime(1, delayTimeIn)} justifyContent="flex-end">
          <StreamerName>@whitep4nth3r</StreamerName>
        </Banner>
      </InnerContainer>
    </Container>
  );
}
