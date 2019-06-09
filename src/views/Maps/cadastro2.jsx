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

import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default class Cadastro2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMap: true
    };
  }

  goToNext = () => {
    window.scroll(120, 550);
  };

  openFilterMap = () => {
    this.setState({ filterMap: !this.state.filterMap });
  };

  render() {
    return (
      <div>
        <VerticalTimeline layout={"one-column"}>
          <VerticalTimelineElement
            id="buyData3"
            style={{ textAlign: "center" }}
            className="vertical-timeline-element--work"
            date=""
            iconStyle={{ background: "rgb(44, 179, 49)", color: "#fff" }}
            icon={<NumberStep number={3} />}
          >
            <h3 className="vertical-timeline-element-title">
              Deseja Filtrar por região?
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "-15px",
                flexDirection: "column"
              }}
              id="filterRegion"
            >
              {this.state.filterMap ? (
                <div>
                  <Button
                    color="primary"
                    style={{ backgroundColor: "#00acc1", maxHeight: "40px" }}
                    onClick={() => this.openFilterMap()}
                  >
                    Sim
                  </Button>
                  <Button
                    color="primary"
                    style={{
                      marginLeft: "20px",
                      maxHeight: "40px",
                      backgroundColor: "#00acc1"
                    }}
                  >
                    Não
                  </Button>{" "}
                  <br />
                </div>
              ) : (
                <div
                  className="row"
                  style={{
                    display: "flex",
                    marginTop: "30px",
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <div className="col-md-3">
                    <label htmlFor="">
                      País
                      <TextInput
                        trigger=""
                        options={[
                          "Brasil",
                          "Canada",
                          "Japao",
                          "Russia",
                          "Estados Unidos"
                        ]}
                        style={{ marginLeft: "20px" }}
                        placeholder="Ex: Brasil"
                      />
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="">
                      Estado
                      <TextInput
                        trigger=""
                        options={[
                          "São Paulo",
                          "Brasilia",
                          "Espirito Santo",
                          "Bahia",
                          "Santa Catarina"
                        ]}
                        style={{ marginLeft: "20px" }}
                        placeholder="Ex: São Paulo"
                      />
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="">
                      Cidade
                      <TextInput
                        trigger=""
                        options={[
                          "São Paulo",
                          "Joenvile",
                          "Americana",
                          "Campinas",
                          "Ribeirao Preto"
                        ]}
                        style={{ marginLeft: "20px" }}
                        placeholder="Ex: São Paulo"
                      />
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="">
                      Bairro
                      <TextInput
                        trigger=""
                        options={[
                          "Mooca",
                          "Bela Vista",
                          "Vila Bocaina",
                          "Vila Biru",
                          "Jardins"
                        ]}
                        style={{ marginLeft: "20px" }}
                        placeholder="Ex: São Paulo"
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
        {!this.state.filterMap ? (
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
          </Button>
        ) : null}
      </div>
    );
  }
}
