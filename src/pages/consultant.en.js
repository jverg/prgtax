import * as React from "react"
import Layout from "../components/layout.en"
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
          Consultant Services
        </h4>
        <h5>
          Tax Planning strategies that minimize tax liability and maximize profit.
        </h5>
      </Col>
      <Col md="3"></Col>
    </Row>
  </Layout>
)

export default ContactPage
