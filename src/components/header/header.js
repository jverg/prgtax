import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './header.scss'
// import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"></link>
    {/* <Container> */}
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="white" variant="light">
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
            <Nav.Link className="menu-item" href="/">Αρχική</Nav.Link>
            <NavDropdown className="menu-item" title="Υπηρεσίες" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Λογιστικά</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Φορολογικά</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/contact">Επικοινωνία</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    {/* </Container> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
