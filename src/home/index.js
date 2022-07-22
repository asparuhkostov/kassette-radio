import React from "react";
import styled from "styled-components";

import Graphic from "./Graphic";
import AudioCassette from "./AudioCassette";
import SoundCloudWidget from "./SoundCloudWidget";

const ResponsiveContainer = styled.div`
  width: 100vw;
  overflow: hidden;
`;

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
  <ResponsiveContainer>
    <SoundCloudWidget />
    <WhiteStripe />
    <div style={visualsContainerStyle}>
      <Graphic />
      <AudioCassette />
    </div>
  </ResponsiveContainer>
);

export default Home;
