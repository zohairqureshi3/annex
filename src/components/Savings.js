import React from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import CurrencyBtc from "../assets/images/Currency=btc.svg";
import Litecoin from "../assets/images/Currency=lite.svg";
import Etherium from "../assets/images/Etherium.svg";
import Ripple from "../assets/images/Ripple.svg";
import Dash from "../assets/images/Dash.svg";
import XVS from "../assets/images/Currency=dash.svg";
import Annex from "../assets/images/Annex.svg";
import LeftAnimation from "../assets/images/left-animation.svg";
import RightAnimation from "../assets/images/right-animation.svg";
import ViewMore from "../assets/images/view-more.svg";

function Savings() {
  return (
    <section id="savings" data-aos="flip-left">
      <Container className="custom-container">
        <p className="saving-text">Savings</p>
        <h3>Earn interest on your assets</h3>
        <div className="d-flex savings-para-div">
          <p className="savings-para">
            Funds held within the protocol can earn APY's based on the market
            demand for that asset. Interest is earned by the block and can be
            used as collateral to borrow assets or to mint stablecoins.
          </p>
          <p className="small-para">🔥 with ANN</p>
        </div>
        <div className="boxes">
          <Row>
            <Col lg={4} md={6}>
              <div className="box">
                <div className="box-wrapper d-flex">
                  <Image src={CurrencyBtc} fluid />
                  <div className="box-content d-flex justify-content-between">
                    <div className="currency-name">
                      <p className="name">Bitcoin</p>
                      <p className="shortcut">BTC</p>
                    </div>
                    <div className="percentage-name">
                      <p className="pert">6.20%</p>
                      <p className="per-name">ARY</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="box">
                <div className="box-wrapper d-flex">
                  <Image src={Litecoin} fluid />
                  <div className="box-content d-flex justify-content-between">
                    <div className="currency-name">
                      <p className="name">Litecoin</p>
                      <p className="shortcut">LTC</p>
                    </div>
                    <div className="percentage-name">
                      <p className="pert">6.20%</p>
                      <p className="per-name">ARY</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="box">
                <div className="box-wrapper d-flex">
                  <Image src={Etherium} fluid />
                  <div className="box-content d-flex justify-content-between">
                    <div className="currency-name">
                      <p className="name">Etherium</p>
                      <p className="shortcut">ETH</p>
                    </div>
                    <div className="percentage-name">
                      <p className="pert">6.20%</p>
                      <p className="per-name">ARY</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="box">
                <div className="box-wrapper d-flex">
                  <Image src={Ripple} fluid />
                  <div className="box-content d-flex justify-content-between">
                    <div className="currency-name">
                      <p className="name">Ripple</p>
                      <p className="shortcut">XRP</p>
                    </div>
                    <div className="percentage-name">
                      <p className="pert">6.20%</p>
                      <p className="per-name">ARY</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="box">
                <div className="box-wrapper d-flex">
                  <Image src={Dash} fluid />
                  <div className="box-content d-flex justify-content-between">
                    <div className="currency-name">
                      <p className="name">Dash</p>
                      <p className="shortcut">DASH</p>
                    </div>
                    <div className="percentage-name">
                      <p className="pert">6.20%</p>
                      <p className="per-name">ARY</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="box">
                <div className="box-wrapper d-flex">
                  <Image src={XVS} fluid />
                  <div className="box-content d-flex justify-content-between">
                    <div className="currency-name">
                      <p className="name">XVS</p>
                      <p className="shortcut">XVS</p>
                    </div>
                    <div className="percentage-name">
                      <p className="pert">6.20%</p>
                      <p className="per-name">ARY</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="box">
                <div className="box-wrapper d-flex">
                  <Image src={Annex} fluid />
                  <div className="box-content d-flex justify-content-between">
                    <div className="currency-name">
                      <p className="name">Annex</p>
                      <p className="shortcut">ANN</p>
                    </div>
                    <div className="percentage-name">
                      <p className="pert">6.20%</p>
                      <p className="per-name">ARY</p>
                    </div>
                  </div>
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
      <div className="view-more d-flex">
        <p>View More</p> <Image src={ViewMore} fluid />
      </div>
    </section>
  );
}

export default Savings;
