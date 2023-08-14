import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { advantageCardsWithIcons } from "./Cards/Utilities.js";

function AdvantageCards() {
  return (
    <section>
      <Container fluid="md">
        <Row>
          {advantageCardsWithIcons?.map((item, index) => {
            return (
              <Col key={index} sm={6} className="mb-5">
                <Row>
                  <Col sm={1}>
                    <span
                      className="material-icons-round"
                      style={{ color: "#6592e6", fontSize: "60px" }}
                    >
                      {item.icon}
                    </span>
                  </Col>
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    <div className="titleClass mb-1">
                      <p>{item.title}</p>
                    </div>
                    <div className="paraClassSmall mb-1">
                      <p>{item.description}</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AdvantageCards;
