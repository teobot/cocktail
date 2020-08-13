import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup"

import Fade from "react-reveal/Fade";

import "../css/Mobile.css";

export class MobileView extends Component {
  render() {
    const data = this.props.data;
    const Ingredients = [];

    for (let num = 1; num < 16; num++) {
      if (data[`strIngredient${num}`] != null) {
        Ingredients.push({
          key: num,
          name: data[`strIngredient${num}`],
          amount: data[`strMeasure${num}`],
        });
      }
    }
    return (
      <Container className="m-0 p-0 position-relative" fluid>
        <Fade>
          <div
            className="mobile-image"
            style={{ backgroundImage: `url("${data.strDrinkThumb}")` }}
          >
            {this.props.RefreshButton}
          </div>
          <Container className="image-text" fluid>
            <Container className="m-0 p-0" fluid>
              <Row className="m-0 p-2 w-100 h-100">
                <div className="drink-name">{data.strDrink}</div>
                <div className="glass-small">
                  - Preferably in a {data.strGlass}
                </div>
              </Row>
            </Container>
          </Container>

          <Container className="info-cont mt-0" fluid>
            <Container className="m-0 p-0" fluid>
              <Row>
                <Col xs={12} sm={6} className="mt-1 mb-1">
                  <ListGroup className="m-1">
                    <ListGroup.Item variant={"success"}>Details</ListGroup.Item>
                    <ListGroup.Item>{data.strCategory}</ListGroup.Item>
                    <ListGroup.Item>{data.strAlcoholic} drink</ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="m-1 pt-2">
                    <ListGroup.Item variant={"warning"}>
                      Ingredients
                    </ListGroup.Item>
                    {Ingredients.map((ing) => (
                      <ListItem
                        key={ing.key}
                        ing={ing.name}
                        amount={ing.amount}
                      ></ListItem>
                    ))}
                  </ListGroup>
                </Col>
                <Col xs={12} sm={6} className="mt-1 mb-1">
                  <ListGroup className="m-1">
                    <ListGroup.Item variant={"info"}>
                      Instructions
                    </ListGroup.Item>
                    <ListGroup.Item className="instructions-text">
                      <small>{data.strInstructions}</small>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Container>
        </Fade>
      </Container>
    );
  }
}

function ListItem(props) {
  return (
    <ListGroup.Item
      variant="light"
      className="d-flex justify-content-between align-items-center"
    >
      {props.ing}
      <span className="badge badge-light">{props.amount}</span>
    </ListGroup.Item>
  );
}

export default MobileView;
