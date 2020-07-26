import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackDataUpdateInterval: null,
    };
    this.reportCurrentTrackData = this.reportCurrentTrackData.bind(this);
  }

  prevTrack() {}

  playTrack() {
    const iframeElement = document.querySelector("iframe");
    let SCWidget = window.SC.Widget(iframeElement);
    SCWidget.play();
  }

  pauseTrack() {}

  nextTrack() {}

  reportCurrentTrackData() {
    const { setCurrentTrackData } = this.props;

    const iframeElement = document.querySelector("iframe");
    let SCWidget = window.SC.Widget(iframeElement);
    SCWidget.getCurrentSound(setCurrentTrackData);
  }

  componentDidMount() {
    this.setState({
      trackDataUpdateInterval: setInterval(this.reportCurrentTrackData, 5000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.trackDataUpdateInterval);
  }

  render() {
    const { extraStyle } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...extraStyle,
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "tape.png"}
          style={{ position: "absolute", width: 400, zIndex: -1 }}
          alt="a graphic of a piece of tape as a background for the audio controls"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "350px",
            textAlign: "center",
          }}
        >
          <div
            style={{ flex: 1 }}
            className="sound_controls_button"
            onClick={this.prevTrack}
          >
            prev
          </div>
          <div
            style={{ flex: 1 }}
            className="sound_controls_button"
            onClick={this.playTrack}
          >
            play
          </div>
          <div
            style={{ flex: 1 }}
            className="sound_controls_button"
            onClick={this.pauseTrack}
          >
            pause
          </div>
          <div
            style={{ flex: 1 }}
            className="sound_controls_button"
            onClick={this.nextTrack}
          >
            next
          </div>
        </div>
      </div>
    );
  }
}
