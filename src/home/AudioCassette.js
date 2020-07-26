import React, { useState } from "react";
import SoundControls from "./SoundControls";

const CurrentTrackMarquee = ({ songName, artistName }) => (
  <div style={{ position: "absolute", marginTop: -180 }}>
    <p>{artistName + " - " + songName}</p>
  </div>
);

export default () => {
  const [currentTrackData, setCurrentTrackData] = useState({});
  const [artistName, setArtistName] = useState("");
  const [songName, setSongName] = useState("");

  if (currentTrackData.publisher_metadata && currentTrackData.title) {
    if (
      artistName !== currentTrackData.publisher_metadata.artist &&
      songName !== currentTrackData.title
    ) {
      setArtistName(currentTrackData.publisher_metadata.artist);
      setSongName(currentTrackData.title);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CurrentTrackMarquee songName={songName} artistName={artistName} />
      <img
        src={process.env.PUBLIC_URL + "/cassette.png"}
        style={{
          width: 495,
          height: 335,
        }}
        alt="a graphic of an audio cassette"
      />
      <SoundControls
        extraStyle={{
          position: "absolute",
          zIndex: 1,
          marginTop: 190,
        }}
        setCurrentTrackData={setCurrentTrackData}
      />
    </div>
  );
};
