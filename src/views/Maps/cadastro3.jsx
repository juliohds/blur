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

import ReactDOM from "react-dom";

import "react-autocomplete-input/dist/bundle.css";
import Load from "./Load.jsx";
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

import Cadastro4 from "./cadastro4";

import CardBody from "components/Card/CardBody.jsx";

import { bugs, website, server } from "variables/general.jsx";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    zIndex: "-999",
    transform: "translate(-50%, -50%)"
  }
};

export default class Cadastro3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMap: true,
      load: false,
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  goToNext = () => {
    window.scroll(120, 550);
  };
  load = () => {
    this.setState({ load: true });
  };
  openFilterMap = () => {
    this.setState({ filterMap: !this.state.filterMap });
  };

  handleChange = () => {
    this.setState({ load: !this.state.load });

    setTimeout(() => {
      this.setState({ load: !this.state.load, modalIsOpen: true });
    }, 3000);
  };

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  toggle = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
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
          icon={<NumberStep number={5} />}
        >
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomTabs
                title=""
                headerColor="info"
                style={{ backgroundColor: "rgb(0, 172, 193)" }}
                tabs={[
                  {
                    tabName: "Dados De Perfil Usuário",
                    tabIcon: Code,
                    tabContent: (
                      <Tasks
                        checkedIndexes={[0, 3]}
                        tasksIndexes={[0, 1, 2, 3, 4, 5]}
                        tasks={website}
                      />
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </VerticalTimelineElement>
        {this.state.load ? (
          <Load />
        ) : (
          <Cadastro4 handleChange={this.handleChange} />
        )}
        <Modal
          isOpen={this.state.modalIsOpen}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Informações Compra</ModalHeader>
          <ModalBody>Dados Comprados com sucesso</ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.toggle}>
              Ver meus dados
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Comprar mais
            </Button>
          </ModalFooter>
        </Modal>
      </VerticalTimeline>
    );
  }
}
