import React, { Component } from "react";

export default class NumberStep extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          textColor: "white",
          fontWeight: "700"
        }}
      >
        {this.props.number}
      </div>
    );
  }
}
