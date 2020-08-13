import React, { Component } from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import MobileView from "./components/MobileView";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      drinkData: [],
    };
    this.saveDrinkData = this.saveDrinkData.bind(this);
    this.getRandomDrinkData = this.getRandomDrinkData.bind(this);
  }

  componentDidMount() {
    this.getRandomDrinkData();
  }

  getRandomDrinkData() {
    var url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.saveDrinkData(data.drinks[0]));
  }

  saveDrinkData(Array) {
    this.setState({ drinkData: Array });
  }

  render() {
    const isMobile = this.state.width <= 845;
    const RefreshButton = (
      <div className="refresh-btn">
        <Button onClick={this.getRandomDrinkData} variant="warning" size="sm">
          New Drink?
        </Button>
      </div>
    );

    if (isMobile) {
      // load mobile view
      return (
        <MobileView
          RefreshButton={RefreshButton}
          data={this.state.drinkData}
        ></MobileView>
      );
    } else {
      return (
        <Container className="App">
          <MobileView
            RefreshButton={RefreshButton}
            data={this.state.drinkData}
          ></MobileView>
        </Container>
      );
    }
  }
}

export default App;
