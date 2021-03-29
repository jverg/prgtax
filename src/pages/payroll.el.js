import * as React from "react"
import Layout from "../components/layout.el"
import { Row, Col, Container } from 'react-bootstrap';
import SEO from "../components/seo"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
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
          Είμαστε ένα από τα μεγαλύτερα Λογιστικά - Φοροτεχνικά γραφεία πανελλαδικώς. 
          Μέσα από μεγάλη ομάδα έμπειρων λογιστών προσπαθούμε να σταθούμε και να βοηθήσουμε τον 
          φορολογούμενο μέσα από σύγχρονες λύσεις και εναλλακτικές διαδικασίες 
          προκειμένου να αντιμετωπίσει τα φορολογικά και εργατικά του βάρη. Σας 
          περιμένουμε στο λογιστικό γραφείο να γνωριστούμε και να σας λύσουμε τα 
          προβλήματα από κοντά.
        </h5>
        <h5 className="text-row__big-text">
          Οι άνθρωποι του γραφείου μας βρίσκονταί κάθε ώρα και στιγμή δίπλα στους πελάτες μας,
          πάντα θα βρίσκετε κάποιος στην διαθεσή σας για ν αέρθετε σε επικοινωνία μαζί του.
        </h5>
        <h4 className="text-row__big-text">
          Επικοινωνήστεμαζί μας και ρωτήστε μας ότι σας απασχολεί!
        </h4>
      </Col>
      <Col md="3"></Col>
    </Row>
    <Row className="text-row">
    <Col md="2" className="text-row__bluecol"></Col>
    <Col md="1"></Col>
    <Col md="6" className="text-row__text">
        <h5>
          Δηλώσεις | Ε9 | Μισθοδοσίες | Βάρδιες | Προσλήψεις
        </h5>
        <h5>
          Lorsssem | ipsufsdfsm | doloewr | sdfdit | amretr
        </h5>
        <h5>
          Διαθήκες | ΙΚΑ | Ασφάλιστικά | Εγατικά | Διάφορα
        </h5>
      </Col>
      <Col md="1"></Col>
      <Col md="2" className="text-row__bluecol"></Col>
    </Row>
  </Layout>
)

export default ContactPage
