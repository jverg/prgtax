import * as React from "react"
import Layout from "../components/layout.el"
import { Row, Col, Container } from 'react-bootstrap';
import SEO from "../components/seo"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './styles/accounting.scss'

const ContactPage = () => (
  <Layout>
    <SEO title="Accounting" />
    <Row>
      <Col md="12" className="imgcolaccounting" />
    </Row>
    <Row className="text-row">
      <Col md="3"></Col>
      <Col md="6" className="text-row__text">
        <h4 className="text-row__text-title">
        Φορολογικές- Λογιστικές
        </h4>
        <h5>
        Φορολογικός Σχεδιασμός, Ο αποτελεσματικός σχεδιασμός της φορολογίας των
επιχειρήσεων οδηγεί αναμφίβολα σε πιο αποτελεσματικές και αποδοτικές επιχειρηματικές
δομές. Μειώστε τη φορολογική σας έκθεση, λαμβάνοντας υπόψη τους φορολογικούς
κανονισμούς και τις νομοθεσίες που σας επηρεάζουν.
        </h5>
      </Col>
      <Col md="3"></Col>
    </Row>
    <Row className="text-row">
    <Col md="2" className="text-row__bluecol"></Col>
    <Col md="1"></Col>
    <Col md="6" className="text-row__text">
        <h5>
        Τήρηση Βιβλίων. Οι λογιστές μας συλλέγουν και επεξεργάζονται δεδομένα σχετικά με
αγορές, αποδείξεις, πωλήσεις και πληρωμές.
       </h5><br></br>
        <h5>
        Προετοιμασία φορολογικών δηλώσεων,
        </h5><br></br>
        <h5>
        Φορολογία (φόρος εισοδήματος, ΦΠΑ, φόρος ακίνητης περιουσίας, διπλή φορολογία κλπ),
        </h5><br></br>
        <h5>
        Σύνταξη ετήσιων οικονομικών καταστάσεων με βάση τα Ελληνικά Λογιστικά Πρότυπα και τα
Διεθνή Λογιστικά Πρότυπα 
        </h5><br></br>
      </Col>
      <Col md="1"></Col>
      <Col md="2" className="text-row__bluecol"></Col>
    </Row>
  </Layout>
)

export default ContactPage
