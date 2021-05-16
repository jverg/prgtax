import * as React from "react"
import Layout from "../components/layout.en"
import { Row, Col } from 'react-bootstrap';
import Seo from "../components/seo"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaste, faBuilding, faUserTie, faCheck, faHandHoldingUsd, faBookReader, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import './styles/legal.scss'

const ContactPage = () => (
  <Layout>
    <Seo title="Accounting" />
    <Row>
      <Col md="12" className="imgcollegal" />
    </Row>
    <Row className="text-row">
      <Col md="3"></Col>
      <Col md="6" className="text-row__text">
        <h4 className="text-row__text-title">
        Legal Services
        </h4>
        <h5>
        Our tax services would be deficient without legal support
        </h5>
      </Col>
      <Col md="3"></Col>
    </Row>
    <Row className="text-row">
    <Col md="2" className="text-row__bluecol"></Col>
    <Col md="1"></Col>
    <Col md="6" className="text-row__text">
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faBuilding} color="#77C5EF"/>
        One Stop Shop Greek companies' incorporation.
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faUserTie} color="#77C5EF"/>
        Drafting of the Minutes and Articles of Association and submission to General Commercial
        Registry (GEMH).
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faPaste} color="#77C5EF"/>
        Attunement of S.A. with L. 4548/2018
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faCheck} color="#77C5EF"/>
        Drafting of Contracts, ie. Employment Contracts, Business Contracts, Transfer of Shares
        Contracts, Lease Agreements, Confidentiality Agreements etc.
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faHandHoldingUsd} color="#77C5EF"/>
        Establishment of foreign Companies’ Offices in Greece and acquisition of VAT number.
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faBookReader} color="#77C5EF"/>
        Σύνταξη συμβάσεων εργασίας, συμφωνητικών μεταβίβασης μετοχών, εκμίσθωσης
        ακινήτων, βιβλίων μετόχων/εταίρων
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faMailBulk} color="#77C5EF"/>
        Banking Compliance.
        </h5><br></br>
      </Col>
      <Col md="1"></Col>
      <Col md="2" className="text-row__bluecol"></Col>
    </Row>
  </Layout>
)

export default ContactPage
