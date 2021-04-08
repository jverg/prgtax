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
        </h3><br></br>
        <h4>
          "Το δυσκολότερο πράγμα στον κόσμο <br></br>για να κατανοήσει κανείς είναι ο φόρος εισοδήματος."
          <br></br><br></br>
          Άλμπερτ Αϊνστάιν
        </h4>
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
        <h6 className="team-row-text-col__text">
          Οι επιχειρηματίες (ή οι επιχειρήσεις) χρειάζονται σαφείς, κατανοητές και ενημερωμένες
          επιχειρηματικές συμβουλές και σταθερή υποστήριξη των αναγκών τους και των
          επιχειρηματικών τους στόχων.<br></br><br></br>
          Η <b className="team-row-text-col__text-bold">PRG ACCOUNTING & CONSULTING</b> είναι εταιρεία φορολογικών-λογιστικών συμβούλων
          με έδρα το κέντρο της Αθήνας, που προσφέρει ολοκληρωμένες φορολογικές υπηρεσίες σε
          ένα ευρύ και ποικίλο φάσμα εταιρειών, βιομηχανιών και φυσικών προσώπων, σε
          πανελλαδικό επίπεδο. Σκοπός μας είναι οι πελάτες μας να:<br></br><br></br>
          <b className="team-row-text-col__text-bold">Αποκτούν κέρδος:</b> Μπορούμε να βοηθήσουμε τις επιχειρήσεις να αυξήσουν το περιθώριο
          κέρδους τους διατηρώντας τα οικονομικά τους στοιχεία και δεδομένα ενημερωμένα και
          ευπαρουσίαστα, όπως και όταν απαιτείται.<br></br><br></br>
          <b className="team-row-text-col__text-bold">Εξοικονομούν χρόνο:</b> Τηρώντας με τάξη τα βιβλία των πελατών μας, οι επιχειρήσεις
          εξοικονομούν πολύ χρόνο. Οι επιχειρηματίες μπορούν να αφιερώσουν αυτό το χρόνο
          εστιάζοντας σε πιο παραγωγικές επιχειρηματικές δραστηριότητες.
          Αυξήσουν τα έσοδά τους: Βασισμένοι στην βαθιά γνώση του αντικειμένου, βοηθάμε τις
          επιχειρήσεις να μεγιστοποιήσουν τα έσοδά τους, ενώ παράλληλα, με καθημερινές,
          εβδομαδιαίες ή μηνιαίες αναφορές μπορούν να λαμβάνουν καλύτερες αποφάσεις.
        </h6>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
