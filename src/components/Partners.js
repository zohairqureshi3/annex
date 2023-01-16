import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Line from "../assets/images/Line.svg";
import CRO from "../assets/images/CRO_Logo.svg";
import Brrmy from "../assets/images/Brrmy.svg";
import BSCDaily from "../assets/images/BSCDaily@2x 1.svg";
import BSCNews from "../assets/images/BSCNews.svg";
import BSCTimes from "../assets/images/BSCTimes.svg";
import PikPng from "../assets/images/PikPng 1.svg";
import Tron from "../assets/images/Tron.svg";
import Beefy from "../assets/images/beefy.svg";
import LeftAnimation from "../assets/images/left-animation.svg";
import RightAnimation from "../assets/images/right-animation.svg";

function Partners() {
  return (
    <section
      id="partners"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <Container fluid className="custom-container">
        <div className="hr-line">
          <Image src={Line} fluid />
        </div>
        <h3>Partners</h3>
        <div className="partners-brands">
          <Row>
            <Col lg={4} md={6}>
              <div className="brand">
                <div className="brand-logo">
                  <Image src={CRO} fluid alt="" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="brand">
                <div className="brand-logo">
                  <Image src={PikPng} fluid alt="" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="brand">
                <div className="brand-logo">
                  <Image src={Tron} fluid alt="" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="brand">
                <div className="brand-logo">
                  <Image src={BSCNews} fluid alt="" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="brand">
                <div className="brand-logo">
                  <Image src={BSCDaily} fluid alt="" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="brand">
                <div className="brand-logo">
                  <Image src={BSCTimes} fluid alt="" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="brand">
                <div className="brand-logo">
                  <Image src={Brrmy} fluid alt="" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="brand">
                <div className="brand-logo">
                  <Image className="beefy" src={Beefy} fluid alt="" />
                  <h4>Beefy Finance</h4>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="animations">
        <Image src={LeftAnimation} fluid />
        <Image src={RightAnimation} fluid />
      </div>
    </section>
  );
}

export default Partners;
