import * as React from "react"
import Layout from "../components/layout.el"
import { Row, Col } from 'react-bootstrap';
import Seo from "../components/seo"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './styles/consultant.scss'

const ContactPage = () => (
  <Layout>
    <Seo title="Accounting" />
    <Row>
      <Col md="12" className="imgcolconsultant" />
    </Row>
    <Row className="text-row">
      <Col md="3"></Col>
      <Col md="6" className="text-row__text">
        <h4 className="text-row__text-title">
        Συμβουλευτικές Υπηρεσίες
        </h4>
        <h5>
        Επιχειρηματικά Σχέδια, εκπόνηση ολοκληρωμένου επιχειρηματικού σχεδιασμού, με
        αναζήτηση όλων των πιθανών κινδύνων, νομικών, φορολογικών και μισθοδοτικών, για την
        ορθότερη και πιο συμφέρουσα επιχειρηματική επιλογή.
        </h5>
      </Col>
      <Col md="3"></Col>
    </Row>
    {/* <Row className="text-row">
    <Col md="2" className="text-row__bluecol"></Col>
    <Col md="1"></Col>
    <Col md="6" className="text-row__text">
        <h5>
        Τήρηση μισθοδοσίας
        </h5><br></br>
        <h5>
        Προετοιμασία συμβάσεων εργασίας
        </h5><br></br>
        <h5>
        Προσλήψεις, απολύσεις και τροποποιήσεις συμβάσεων, με υποβολή τους στο ΕΡΓΑΝΗ
        </h5><br></br>
        <h5>
        Ενημέρωση για τις υποχρεώσεις στους ασφαλιστικούς φορείς
        </h5><br></br>
        <h5>
        Υποστήριξη και συμβουλές κατά τη διάρκεια ελέγχων / επιθεωρήσεων από τις αρχές
        </h5><br></br>
        <h5>
        Προετοιμασία αρχείων πληρωμής και υποβολή στο σύστημα ηλεκτρονικής τραπεζικής
εφαρμογής
        </h5><br></br>
        <h5>
        Βοήθεια HR
        </h5><br></br>
        <h5>
        Ειδικές συμβουλές για θέματα εργατικού δικαίου
        </h5><br></br>
      </Col>
      <Col md="1"></Col>
      <Col md="2" className="text-row__bluecol"></Col>
    </Row> */}
  </Layout>
)

export default ContactPage
