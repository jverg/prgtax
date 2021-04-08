import * as React from "react"
import Layout from "../components/layout.el"
import { Row, Col } from 'react-bootstrap';
import SEO from "../components/seo"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaste, faBuilding, faUserTie, faCheck, faHandHoldingUsd, faBookReader, faMailBulk, faProjectDiagram, faFileContract } from '@fortawesome/free-solid-svg-icons'
import './styles/legal.scss'

const ContactPage = () => (
  <Layout>
    <SEO title="Accounting" />
    <Row>
      <Col md="12" className="imgcollegal" />
    </Row>
    <Row className="text-row">
      <Col md="3"></Col>
      <Col md="6" className="text-row__text">
        <h4 className="text-row__text-title">
        Νομικές Υπηρεσίες
        </h4>
        <h5>
        Οι φορολογικές υπηρεσίες δεν θα ήταν ολοκληρωμένες και ενιαίες χωρίς την συνδρομή
        της νομικής υποστήριξης.
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
        Ηλεκτρονική αυθημερόν σύσταση ελληνικών εταιρειών
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faUserTie} color="#77C5EF"/>
        Μετατροπές Νομικών Προσώπων
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faPaste} color="#77C5EF"/>
        Σύνταξη και τροποποίηση καταστατικών
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faCheck} color="#77C5EF"/>
        Εναρμόνιση Ανωνύμων Εταιρειών με Ν.4548/2018
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faHandHoldingUsd} color="#77C5EF"/>
        Σύνταξη πρακτικών εταιρειών και δημοσίευσή τους στο ΓΕΜΗ
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faBookReader} color="#77C5EF"/>
        Σύνταξη συμβάσεων εργασίας, συμφωνητικών μεταβίβασης μετοχών, εκμίσθωσης
        ακινήτων, βιβλίων μετόχων/εταίρων
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faMailBulk} color="#77C5EF"/>
        Μητρώο Πραγματικών Δικαιούχων
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faProjectDiagram} color="#77C5EF"/>
        Ίδρυση υποκαταστημάτων αλλοδαπής στην Ελλάδα και απόκτηση ελληνικού ΑΦΜ
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faFileContract} color="#77C5EF"/>
        Νομικές Συμβουλές επί θεμάτων ευθύνης μελών ΔΣ, διαχειριστών, μετόχων και εταίρων
        </h5><br></br>
      </Col>
      <Col md="1"></Col>
      <Col md="2" className="text-row__bluecol"></Col>
    </Row>
  </Layout>
)

export default ContactPage
