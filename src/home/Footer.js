import React from "react";

export default () => (
  <div
    style={{
      display: "flex",
      flexFlow: "column",
      padding: "50px",
      textAlign: "center",
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
    }}
  >
    <p>寄りかかってリラックス</p>
    <a
      className="bmc-button"
      target="_blank"
      href="https://www.buymeacoffee.com/lerna"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Support"
      />
      <span
        style={{
          marginLeft: "5px",
          fontSize: "28px !important",
        }}
      >
        Support
      </span>
    </a>
  </div>
);
