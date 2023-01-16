import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import BannerImg from "../assets/images/Banner.svg";

function Banner() {
  return (
    <section
      id="banner"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <Container className="custom-container">
        <Row>
          <Col lg={6} className="text-content">
            <div className="banner-body-wrapper">
              <h2>Annex</h2>
              <h1>Money Markets</h1>
              <h5>
                A Decentralized Marketplace for Lenders and Borrowers with
                Borderless Stablecoins.
              </h5>
              <div className="banner-btn">
                <Button variant="primary">Launch App</Button>
              </div>
            </div>
          </Col>
          <Col lg={6} className="img-content">
            <div className="banner-body-wrapper">
              <Image src={BannerImg} fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
