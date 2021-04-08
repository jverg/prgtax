import * as React from "react";
import PropTypes from "prop-types";
import { Location } from '@reach/router'
import { StaticImage } from "gatsby-plugin-image";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './header.scss';

const Header = ({ siteTitle, lang}) => (
  <header>
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"></link>
      <Navbar collapseOnSelect expand="xxl" bg="white" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
          <StaticImage
            src="../../images/prg-logo.png"
            alt="PRG logo"
            className="logo"
          />
        </Navbar.Brand>
        <Location>
          {({ location }) => {
            const path = location.pathname;
            return (<div className="flags">
              <a href={path} className="flags-greek">
                GR
              </a>
              <a href={`/en${path}`} className="flags-english">
                EN
              </a>
            </div>);
          }}
        </Location>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link className="menu-item" href="/">Αρχική</Nav.Link>
            <NavDropdown className="menu-item" title="Υπηρεσίες" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/accounting">Φορολογικές - Λογιστικές Υπηρεσίες</NavDropdown.Item>
              <NavDropdown.Item href="/consultant">Συμβουλευτικές Υπηρεσίες</NavDropdown.Item>
              <NavDropdown.Item href="/payroll">Μισθοδοσία</NavDropdown.Item>
              <NavDropdown.Item href="/legal">Νομικές Υπηρεσίες</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Επικοινωνία</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
