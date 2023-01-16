import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Line from "../assets/images/Line.svg";
import DEFI1 from "../assets/images/defi-1.svg";
import DEFI2 from "../assets/images/defi-2.svg";
import DEFI3 from "../assets/images/defi-3.svg";
import DEFI4 from "../assets/images/defi-4.svg";

function DEFIDevelopers() {
  return (
    <section
      id="defi-developers"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <Container fluid className="custom-container">
        <div className="hr-line">
          <Image src={Line} fluid />
        </div>
        <h3>Superpowers for DEFI developers.</h3>
        <p className="defi-developers-para">
          Check out the documentation, the quick start or a guide below to
          integrate your project with thousands of tokens and billions in
          liquidity.
        </p>
        <div className="boxes">
          <Row>
            <Col lg={3} md={6}>
              <div className="box">
                <div className="box-wrapper">
                  <div className="box-img">
                    <Image src={DEFI1} fluid />
                  </div>
                  <p className="box-heading">AToken</p>
                  <p className="box-para">
                    Simplify the process of integrating Annex into your project.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="box">
                <div className="box-wrapper">
                  <div className="box-img">
                    <Image src={DEFI2} fluid />
                  </div>
                  <p className="box-heading">Programmable Liquidity</p>
                  <p className="box-para">
                    A step-by-step guide to getting started building interfaces
                    with Annex Swap.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="box">
                <div className="box-wrapper">
                  <div className="box-img">
                    <Image src={DEFI3} fluid />
                  </div>
                  <p className="box-heading">Flash Swaps</p>
                  <p className="box-para">
                    Withdraw the reserves of any BEP20 token on Annex and
                    execute arbitrary logic.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="box">
                <div className="box-wrapper">
                  <div className="box-img">
                    <Image src={DEFI4} fluid />
                  </div>
                  <p className="box-heading">Oracles</p>
                  <p className="box-para">
                    Highly decentralized, manipulation-resistant, on-chain price
                    feeds.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default DEFIDevelopers;
