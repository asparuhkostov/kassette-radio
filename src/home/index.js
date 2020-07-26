import React from "react";

import Page from "./Page";
import Graphic from "./Graphic";
import AudioCassette from "./AudioCassette";
import SoundCloudWidget from "./SoundCloudWidget";

const visualsContainerStyle = {
  padding: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column",
};

const WhiteStripe = () => (
  <div
    style={{
      background: "white",
      left: "50%",
      transform: "translate(-50%, 0)",
      zIndex: -1,
      position: "absolute",
      width: 250,
      height: "100vh",
    }}
  />
);

const Home = () => (
  <Page>
    <SoundCloudWidget />
    <WhiteStripe />
    <div style={visualsContainerStyle}>
      <Graphic />
      <AudioCassette />
    </div>
  </Page>
);

export default Home;
