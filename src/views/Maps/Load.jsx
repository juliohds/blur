import React, { Component } from "react";

import NumberStep from "./NumberStep";

import Button from "components/CustomButtons/Button.jsx";

import "react-autocomplete-input/dist/bundle.css";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default class Load extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "300px",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          marginTop: "100px"
        }}
      >
        <img
          src="https://demos.laraget.com/images/loading2.gif"
          alt=""
          srcset=""
          style={{
            height: "120px",
            backgroundColor: "white"
          }}
        />
        <div>validando dados cartão</div>
      </div>
    );
  }
}
