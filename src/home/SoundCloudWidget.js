import React from "react";
import useScript from "../utils/useScript";

export default () => {
  useScript(process.env.PUBLIC_URL + "soundcloud.js");

  return (
    <div style={{ position: "absolute", top: "-100vh" }}>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/jay-bear-7/sets/monodrone`}
      ></iframe>
    </div>
  );
};
