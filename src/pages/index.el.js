import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBuilding, faBook, faSearchDollar, faPaste, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import './styles/index.scss'

import Layout from "../components/layout.el"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Αρχική" />
    <Row className="first-index-row">
      <Col lg="6" md="6" sm="12" xs="12" className="first-index-row__text-col">
        <h3>
          <StaticImage
            src="../images/prg-logo.png"
            alt="PRG logo"
            className="logo"
          />
        </h3>
        <h5>Λογιστικό - Φοροτεχνικό γραφείο</h5>
      </Col>
      <Col lg="6" md="6" sm="12" xs="12" className="first-index-row-img-col">
        <div className="first-index-row-img-col__main-image" />
      </Col>
    </Row>
    <Container className="services-container">
      <h3 className="services-container__header">Οι υπηρεσίες μας</h3>
      <Row className="services-container-row">
        <div className="col-sm-4 services-container-row-element">
          <FontAwesomeIcon className="services-container-row-element__icon" icon={faAddressCard} size="2x" color="#77C5EF"/>
          <p>Σύνταξη οικονομικών καταστάσεων</p>
        </div>
        <div className="col-sm-4 services-container-row-element">
          <FontAwesomeIcon className="services-container-row-element__icon" icon={faBuilding} size="2x" color="#77C5EF"/>
          <p>Επίβλεψη Λογιστηρίου</p>
        </div>
        <div className="col-sm-4 services-container-row-element">
          <FontAwesomeIcon className="services-container-row-element__icon" icon={faBook} size="2x" color="#77C5EF"/>
          <p>Τήρηση λογιστικών βιβλίων</p>
        </div>
      </Row>
      <Row>
        <div className="col-sm-4 services-container-row-element">
          <FontAwesomeIcon className="services-container-row-element__icon" icon={faSearchDollar} size="2x" color="#77C5EF"/>
          <p>Υπολογισμός μισθοδοσίας</p>
        </div>
        <div className="col-sm-4 services-container-row-element">
          <FontAwesomeIcon className="services-container-row-element__icon" icon={faPaste} size="2x" color="#77C5EF"/>
          <p>Έλεγχοι από την φορολογική διοίκηση</p>
        </div>
        <div className="col-sm-4 services-container-row-element">
          <FontAwesomeIcon className="services-container-row-element__icon" icon={faUsersCog} size="2x" color="#77C5EF"/>
          <p>
            Σύσταση και μεταβολές Νομικών Προσώπων
          </p>
        </div>
      </Row>
    </Container>
    <Row className="team-row">
      <Col lg="6" md="6" sm="12" xs="12" className="team-row-img-col">
        <div className="team-row-img-col__main-image" />
      </Col>
      <Col lg="6" md="6" sm="12" xs="12" className="team-row-text-col">
        <h5 className="team-row-text-col__text">
          Είμαστε ένα από τα μεγαλύτερα Λογιστικά - Φοροτεχνικά γραφεία πανελλαδικώς. 
          Μέσα από μεγάλη ομάδα έμπειρων λογιστών προσπαθούμε να σταθούμε και να βοηθήσουμε τον 
          φορολογούμενο μέσα από σύγχρονες λύσεις και εναλλακτικές διαδικασίες 
          προκειμένου να αντιμετωπίσει τα φορολογικά και εργατικά του βάρη. Σας 
          περιμένουμε στο λογιστικό γραφείο να γνωριστούμε και να σας λύσουμε τα 
          προβλήματα από κοντά.
        </h5>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
