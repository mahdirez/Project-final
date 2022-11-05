import React from "react";
import FreeToWatch from "./cards/FreeToWatch";
import NowPlayingCard from "./cards/NowPlayingCard";
import TopRateCard from "./cards/TopRateCard";

export default function Main() {
  return (
    <>
      <TopRateCard />
      <NowPlayingCard />
      <FreeToWatch />
    </>
  );
}
