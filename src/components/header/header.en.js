import * as React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './header.scss';

const Header = ({ siteTitle, lang }) => (
  <header>
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"></link>
    {/* <Container> */}
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand href="/">
          <StaticImage
            src="../../images/prg-logo.png"
            alt="PRG logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link className="menu-item" href="/">Home</Nav.Link>
            <NavDropdown className="menu-item" title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/accounting">Tax - Accounting</NavDropdown.Item>
              <NavDropdown.Item href="/payroll">Payroll</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    {/* </Container> */}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  lang: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  lang: ``,
};

export default Header;
