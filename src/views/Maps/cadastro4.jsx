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

import "react-autocomplete-input/dist/bundle.css";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardBody from "components/Card/CardBody.jsx";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

export default class Cadastro4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMap: true,
      buy: false
    };
    window.scrollTo(0, 0);
  }

  goToNext = () => {
    window.scroll(120, 550);
  };

  openFilterMap = () => {
    this.setState({ filterMap: !this.state.filterMap });
  };

  buy = () => {
    this.setState({ buy: true });
  };
  componentDidMount() {}

  render() {
    return (
      <VerticalTimeline layout={"one-column"}>
        <h3 style={{ marginLeft: "35px" }}>Confirmar Compra</h3>
        <VerticalTimelineElement
          id="buyData3"
          style={{ textAlign: "center" }}
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: "rgb(44, 179, 49)", color: "#fff" }}
          icon={<NumberStep number={6} />}
        >
          <div className="row">
            <div className="col-md-12">
              <p>Dados Pessoais(18) - R$4,00</p>
              <p>Dados de Perfil do usuário(6) - R$7,00</p>
              <p>Taxa de manutenção - R$ 1,00</p>
              <p>Total: 11,00</p>
            </div>
          </div>
        </VerticalTimelineElement>
        <Button
          color="primary"
          style={{
            margin: "auto",
            marginTop: "-20px",
            display: "block",
            backgroundColor: "rgb(33, 150, 243)"
          }}
          onClick={() => this.props.handleChange()}
        >
          Comprar
        </Button>
      </VerticalTimeline>
    );
  }
}
