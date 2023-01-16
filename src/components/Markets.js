import React from "react";
import { Container, NavDropdown, Image } from "react-bootstrap";
import A from "../assets/images/A.svg";

function Markets() {
  return (
    <section
      id="markets"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <Container fluid className="market-container">
        <h3>Markets</h3>
        <div className="market-container-body">
          <div className="market-price d-flex justify-content-between">
            <div className="dropdown">
              <div className="d-flex">
                <Image src={A} fluid />
                <NavDropdown title="APN" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">BSN</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">APNNN</NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
            <div className="price">
              <p>Price: $78.27</p>
            </div>
          </div>
          <div className="market-details">
            <div className="detail">
              <p className="detail-name">Total Supply</p>
              <p className="detail-value">$440,679,010.52</p>
            </div>
            <div className="detail">
              <p className="detail-name">Number of Suppliers</p>
              <p className="detail-value">10333</p>
            </div>
            <div className="detail">
              <p className="detail-name">Total Borrowed</p>
              <p className="detail-value">$35,342,195.40</p>
            </div>
            <div className="detail">
              <p className="detail-name">Number of Borrowers</p>
              <p className="detail-value">77</p>
            </div>
            <div className="detail">
              <p className="detail-name">Token Address</p>
              <p className="detail-value">0x151b...3e1d</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Markets;
