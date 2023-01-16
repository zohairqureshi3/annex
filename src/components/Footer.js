import React from "react";
import { Navbar, Container, Image, Nav, Button } from "react-bootstrap";
import HeaderLogo from "../assets/images/HeaderLogo.svg";
import Icon1 from "../assets/images/icon1.svg";
import Icon2 from "../assets/images/icon2.svg";
import Icon3 from "../assets/images/icon3.svg";
import Icon4 from "../assets/images/icon4.svg";
import Icon5 from "../assets/images/icon5.svg";

function Footer() {
  return (
    <section id="footer">
      <div className="custom-container">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <Image src={HeaderLogo} fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#Mint">Mint</Nav.Link>
                <Nav.Link href="#Savings">Savings</Nav.Link>
                <Nav.Link href="#Protocol">Protocol</Nav.Link>
                <Nav.Link href="#Borrow">Borrow</Nav.Link>
                <Nav.Link href="#Markets">Markets</Nav.Link>
                <Nav.Link href="#Docs">Docs</Nav.Link>
                <Button className="white-paper" variant="light">
                  White Paper
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr className="footer-line" />
        <div className="footer-bottom">
          <p>© 2021 Annex Finance, All Rights Reserve.</p>
          <div className="social-icons">
            <ul className="social-icons-ul">
              <li>
                <a href="#">
                  <Image src={Icon1} fluid alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={Icon2} fluid alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={Icon3} fluid alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={Icon4} fluid alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={Icon5} fluid alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
