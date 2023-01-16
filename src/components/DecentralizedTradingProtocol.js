import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Line from "../assets/images/Line.svg";
import Protocol1 from "../assets/images/protocol-1.svg";
import Protocol2 from "../assets/images/protocol-2.svg";
import Protocol3 from "../assets/images/protocol-3.svg";

function DecentralizedTradingProtocol() {
  return (
    <section id="decentralizedtradingprotocol" data-aos="fade-down-right">
      <Container className="custom-container">
        <div className="hr-line">
          <Image src={Line} fluid />
        </div>
        <h3>Decentralized Trading Protocol</h3>
        <Row>
          <Col lg={4} sm={6}>
            <div className="protocol-wrapper">
              <div className="protocol-img">
                <Image src={Protocol1} fluid />
              </div>
              <div className="protocol-content">
                <p>Decentralized</p>
                <p>
                  Access an immutable money market protocol directly on-chain.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="protocol-wrapper">
              <div className="protocol-img">
                <Image src={Protocol2} fluid />
              </div>
              <div className="protocol-content">
                <p>BEP-20</p>
                <p>
                  All Annex Protocol assets are bound by the BEP-20 standard.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="protocol-wrapper">
              <div className="protocol-img">
                <Image src={Protocol3} fluid />
              </div>
              <div className="protocol-content">
                <p>Scalable</p>
                <p>
                  Built on Binance Smart Chain for fast, secure, and low cost
                  transactions.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DecentralizedTradingProtocol;
