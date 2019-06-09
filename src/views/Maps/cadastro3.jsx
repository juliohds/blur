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
    const { classes } = this.props;
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
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                title="Tasks:"
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Bugs",
                    tabIcon: BugReport,
                    tabContent: (
                      <Tasks
                        checkedIndexes={[0, 3]}
                        tasksIndexes={[0, 1, 2, 3]}
                        tasks={bugs}
                      />
                    )
                  },
                  {
                    tabName: "Website",
                    tabIcon: Code,
                    tabContent: (
                      <Tasks
                        checkedIndexes={[0]}
                        tasksIndexes={[0, 1]}
                        tasks={website}
                      />
                    )
                  },
                  {
                    tabName: "Server",
                    tabIcon: Cloud,
                    tabContent: (
                      <Tasks
                        checkedIndexes={[1]}
                        tasksIndexes={[0, 1, 2]}
                        tasks={server}
                      />
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color="warning">
                  <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                  <p className={classes.cardCategoryWhite}>
                    New employees on 15th September, 2016
                  </p>
                </CardHeader>
                <CardBody>
                  <Table
                    tableHeaderColor="warning"
                    tableHead={["ID", "Name", "Salary", "Country"]}
                    tableData={[
                      ["1", "Dakota Rice", "$36,738", "Niger"],
                      ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                      ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                      ["4", "Philip Chaney", "$38,735", "Korea, South"]
                    ]}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  }
}
