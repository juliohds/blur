import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import TableChart from "@material-ui/icons/TableChart";
import NumberStep from "./NumberStep";

import Button from "components/CustomButtons/Button.jsx";

import StepWizard from "react-step-wizard";
import Nav from "./Nav";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default class Cadastro1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMap: true
    };
  }

  openFilterMap = () => {
    this.setState({ filterMap: !this.state.filterMap });
  };

  render() {
    return (
      <div>
        <Nav />
        <VerticalTimeline layout={"one-column"}>
          <VerticalTimelineElement
            id="buyData1"
            style={{ textAlign: "center" }}
            className="vertical-timeline-element--work"
            date=""
            iconStyle={{ background: "rgb(44, 179, 49)", color: "#fff" }}
            icon={<NumberStep number={1} />}
          >
            <h3 className="vertical-timeline-element-title">
              Quantos dados Você Precisa?
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Você Precisa?</h4> */}
            <input
              type="text"
              style={{
                margin: "13px auto auto",
                display: "block",
                borderRadius: "16px",
                padding: "5px",
                width: "25%",
                textAlign: "center",
                marginTop: "13px",
                display: "block",
                borderColor: "#2cb331"
              }}
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            id="buyData2"
            style={{ textAlign: "center" }}
            className="vertical-timeline-element--work"
            date=""
            iconStyle={{ background: "rgb(44, 179, 49)", color: "#fff" }}
            icon={<NumberStep number={2} />}
          >
            <h3 className="vertical-timeline-element-title">
              Selecione o tipo de dado
            </h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h4 className="vertical-timeline-element-subtitle">
                <input type="radio" />
                Genérico (Publico)
              </h4>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ marginLeft: "13px" }}
              >
                <input type="radio" />
                Especializado (Anonimo)
              </h4>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Button
          color="primary"
          style={{
            margin: "auto",
            marginTop: "-20px",
            display: "block",
            backgroundColor: "rgb(33, 150, 243)"
          }}
          onClick={this.props.nextStep}
        >
          Continue
        </Button>{" "}
      </div>
    );
  }
}
