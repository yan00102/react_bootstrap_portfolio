import React from "react";
import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Hero(props) {
  return (
    <Jumbotron Jumbotron-fluid p-0>
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            {props.subTitle && (
              <h3 className="display-4 font-weight-light">{props.subTitle}</h3>
            )}
            {props.text && (
              <h3 className="display-5 font-weight-light">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
