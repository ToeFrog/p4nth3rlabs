import React from "react";
import { useLocation } from "react-router-dom";
import { Container, InnerContainer, TitleText, Banner } from "./index.style";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
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
      <InnerContainer>
        <Banner type="top" delay="0" />
        <Banner type="center" delay="0.5">
          <TitleText>{title}</TitleText>
        </Banner>
        <Banner type="bottom" delay="1" />
      </InnerContainer>
    </Container>
  );
}
