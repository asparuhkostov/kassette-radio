import React from "react";

const N_GRAPHICS = 21;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGraphic: 1,
      interval: null,
    };
    this.changeGraphic = this.changeGraphic.bind(this);
  }

  changeGraphic() {
    const { currentGraphic } = this.state;
    if (currentGraphic < N_GRAPHICS) {
      this.setState({ currentGraphic: currentGraphic + 1 });
    } else {
      this.setState({ currentGraphic: 1 });
    }
  }

  componentDidMount() {
    this.setState({ interval: setInterval(this.changeGraphic, 15000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { currentGraphic } = this.state;
    return (
      <div>
        <div id="graphic_container" style={{ width: 350, height: 400 }}>
          <div style={{ width: 348, height: 398, overflow: "hidden" }}>
            <img
              src={`${process.env.PUBLIC_URL}/graphics/${currentGraphic}.gif`}
              style={{
                width: 300,
                height: 280,
                marginTop: 50,
                marginLeft: 25,
              }}
              alt="relaxing moving pictures"
            />
          </div>
        </div>
      </div>
    );
  }
}
