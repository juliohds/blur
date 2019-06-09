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

export default class Cadastro3 extends Component {
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
      <VerticalTimeline layout={"one-column"}>
        <VerticalTimelineElement
          id="buyData3"
          style={{ textAlign: "center" }}
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: "rgb(44, 179, 49)", color: "#fff" }}
          icon={<NumberStep number={4} />}
        >
          <h3 className="vertical-timeline-element-title">
            Quais dados Você Deseja?
          </h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomTabs
                title=""
                headerColor="info"
                style={{ backgroundColor: "rgb(0, 172, 193)" }}
                tabs={[
                  {
                    tabName: "Dados Pessoais",
                    tabIcon: Code,
                    tabContent: (
                      <Tasks
                        checkedIndexes={[0, 3]}
                        tasksIndexes={[
                          0,
                          1,
                          2,
                          3,
                          4,
                          5,
                          6,
                          7,
                          8,
                          9,
                          10,
                          11,
                          12,
                          13,
                          14,
                          15,
                          16
                        ]}
                        tasks={bugs}
                      />
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          id="buyData3"
          style={{ textAlign: "center" }}
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: "rgb(44, 179, 49)", color: "#fff" }}
          icon={<NumberStep number={4} />}
        >
          <h3 className="vertical-timeline-element-title">
            Quais dados Você Deseja?
          </h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomTabs
                title=""
                headerColor="info"
                style={{ backgroundColor: "rgb(0, 172, 193)" }}
                tabs={[
                  {
                    tabName: "Dados De Renda",
                    tabIcon: Code,
                    tabContent: (
                      <Tasks
                        checkedIndexes={[0, 3]}
                        tasksIndexes={[
                          0,
                          1,
                          2,
                          3,
                          4,
                          5,
                          6,
                          7,
                          8,
                          9,
                          10,
                          11,
                          12,
                          13,
                          14,
                          15,
                          16
                        ]}
                        tasks={bugs}
                      />
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </VerticalTimelineElement>
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
          Continuar
        </Button>
      </VerticalTimeline>
    );
  }
}
