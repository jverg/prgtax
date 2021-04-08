import * as React from "react"
import Layout from "../components/layout.el"
import { Row, Col } from 'react-bootstrap';
import SEO from "../components/seo"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave, faCommentsDollar, faBuilding, 
  faHandHoldingUsd, faUserCheck, faUniversity, faUsers, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import './styles/payroll.scss'

const ContactPage = () => (
  <Layout>
    <SEO title="Accounting" />
    <Row>
      <Col md="12" className="imgcol" />
    </Row>
    <Row className="text-row">
      <Col md="3"></Col>
      <Col md="6" className="text-row__text">
        <h4 className="text-row__text-title">
          Mισθοδοσία
        </h4>
        <h5>
        Παρέχουμε βαθιά εξειδίκευση σε θέματα ανθρώπινου δυναμικού, για την ορθή
        διατήρηση της μισθοδοσίας μίας επιχείρησης και της αποφυγής προβλημάτων
        συμμόρφωσης με το εργατικό δίκαιο.
        </h5>
      </Col>
      <Col md="3"></Col>
    </Row>
    <Row className="text-row">
    <Col md="2" className="text-row__bluecol"></Col>
    <Col md="1"></Col>
    <Col md="6" className="text-row__text">
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faMoneyBillWave} color="#77C5EF"/>
        Τήρηση μισθοδοσίας
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faCommentsDollar} color="#77C5EF"/>
        Προετοιμασία συμβάσεων εργασίας
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faBuilding} color="#77C5EF"/>
        Προσλήψεις, απολύσεις και τροποποιήσεις συμβάσεων, με υποβολή τους στο ΕΡΓΑΝΗ
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faHandHoldingUsd} color="#77C5EF"/>
        Ενημέρωση για τις υποχρεώσεις στους ασφαλιστικούς φορείς
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faUserCheck} color="#77C5EF"/>
        Υποστήριξη και συμβουλές κατά τη διάρκεια ελέγχων / επιθεωρήσεων από τις αρχές
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faUniversity} color="#77C5EF"/>
        Προετοιμασία αρχείων πληρωμής και υποβολή στο σύστημα ηλεκτρονικής τραπεζικής
        εφαρμογής
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faUsers} color="#77C5EF"/>
        Βοήθεια HR
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faBriefcase} color="#77C5EF"/>
        Ειδικές συμβουλές για θέματα εργατικού δικαίου
        </h5><br></br>
      </Col>
      <Col md="1"></Col>
      <Col md="2" className="text-row__bluecol"></Col>
    </Row>
  </Layout>
)

export default ContactPage
