import React from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import HeaderLogo from "../assets/images/HeaderLogo.svg";

function Header() {
  return (
    <section id="header" data-aos="fade-right">
      <div className="custom-container">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <Image src={HeaderLogo} fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
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
      </div>
    </section>
  );
}

export default Header;
