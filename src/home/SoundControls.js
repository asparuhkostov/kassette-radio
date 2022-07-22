import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.playTrack = this.playTrack.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
    this.prevTrack = this.prevTrack.bind(this);
    this.reportCurrentTrackData = this.reportCurrentTrackData.bind(this);
  }

  getSoundCloudWidget() {
    const iframeElement = document.querySelector("iframe");
    let widget = window.SC.Widget(iframeElement);
    return widget;
  }

  prevTrack() {
    const widget = this.getSoundCloudWidget();
    widget.prev();
    this.reportCurrentTrackData();
  }

  playTrack() {
    const widget = this.getSoundCloudWidget();
    widget.play();
    this.reportCurrentTrackData();
  }

  pauseTrack() {
    const widget = this.getSoundCloudWidget();
    widget.pause();
  }

  nextTrack() {
    const widget = this.getSoundCloudWidget();
    widget.next();
    this.reportCurrentTrackData();
  }

  reportCurrentTrackData() {
    const { setCurrentTrackData } = this.props;
    const widget = this.getSoundCloudWidget();
    widget.getCurrentSound((res) =>
      setCurrentTrackData(res.publisher_metadata.artist, res.title)
    );
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
