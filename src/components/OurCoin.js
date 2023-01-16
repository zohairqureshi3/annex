import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import OurCoinImg from "../assets/images/our-coin.svg";

function OurCoin() {
  return (
    <section id="our-coin" data-aos="fade-up">
      <Container className="custom-container">
        <p>About Coin</p>
        <h3>OUR COIN</h3>
        <p className="our-coin-para">
          Guaranteed liquidity for millions of users and hundreds of
          applications.
        </p>
        <Row>
          <Col md={6}>
            <div className="our-coin-wrapper">
              <div className="our-coin-img">
                <Image src={OurCoinImg} fluid />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="our-coin-wrapper">
              <h6>Profitable Blockchain</h6>
              <p>
                Funds held within the protocol can earn ANN based on the market
                demand for that asset. Interest is earned by the block and can
                be used as collateral to borrow assets or to mint stablecoins.
              </p>
              <div className="coin-details">
                <Row>
                  <Col xs={6} sm={6}>
                    <h4>$201B +</h4>
                    <p>All Time Volume</p>
                  </Col>
                  <Col xs={6} sm={6}>
                    <h4>72K +</h4>
                    <p>Liquidity Providers</p>
                  </Col>
                  <Col xs={6} sm={6}>
                    <h4>40M +</h4>
                    <p>All Time Trades</p>
                  </Col>
                  <Col xs={6} sm={6}>
                    <h4>200 +</h4>
                    <p>Defi Integrations</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurCoin;
