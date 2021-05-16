import * as React from "react"
import Layout from "../components/layout.en"
import { Row, Col } from 'react-bootstrap';
import Seo from "../components/seo"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faPaste, faSearchDollar, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import './styles/accounting.scss'

const ContactPage = () => (
  <Layout>
    <Seo title="Accounting" />
    <Row>
      <Col md="12" className="imgcolaccounting" />
    </Row>
    <Row className="text-row">
      <Col md="3"></Col>
      <Col md="6" className="text-row__text">
        <h4 className="text-row__text-title">
        Tax - Accounting services
        </h4>
      </Col>
      <Col md="3"></Col>
    </Row>
    <Row className="text-row">
      <Col md="2" className="text-row__bluecol"></Col>
      <Col md="1"></Col>
      <Col md="6" className="text-row__text">
        <h5>
          <FontAwesomeIcon className="text-row__text__icon" icon={faBook} color="#77C5EF"/>
          Tax Planning
        </h5><br></br>
        <h5>
          <FontAwesomeIcon className="text-row__text__icon" icon={faPaste} color="#77C5EF"/>
          Book Keeping
        </h5><br></br>
        <h5>
          <FontAwesomeIcon className="text-row__text__icon" icon={faAddressBook} color="#77C5EF"/>
          Tax Declarations       
        </h5><br></br>
        <h5>
          <FontAwesomeIcon className="text-row__text__icon" icon={faSearchDollar} color="#77C5EF"/>
          Direct and Indirect Taxation (Income tax, VAT, Real Estate Tax, Double Taxation etc.)
        </h5><br></br>
      </Col>
      <Col md="1"></Col>
      <Col md="2" className="text-row__bluecol"></Col>
    </Row>
  </Layout>
)

export default ContactPage
