import React from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import ProtocolImg from "../assets/images/protocol-img.svg";

function Protocol() {
  return (
    <section id="protocol" data-aos="zoom-in-down">
      <Container className="custom-container">
        <Row>
          <Col md={6}>
            <div className="protocol-wrapper">
              <p className="protocol-text">Protocol</p>
              <h3>Money Markets built on Binance Smart Chain</h3>
              <p className="protocol-para">
                You can now tokenize your assets utilizing the Binance Smart
                Chain and receive portable ATokens that you can freely move
                around to cold storage, transfer to other users, and more.
              </p>
              <div className="launch-btn">
                <Button variant="primary">Launch App</Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="protocol-wrapper">
              <div className="protocol-img">
                <Image src={ProtocolImg} fluid />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Protocol;
