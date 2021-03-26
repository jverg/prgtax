import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faCheck, faEnvelope, faFile, faPaste, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './styles/index.scss'

import LayoutEn from "../components/layout.en"
import SEO from "../components/seo"

const IndexPage = () => (
  <LayoutEn>
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
        <h5>Accounting - Consulting office</h5>
      </Col>
      <Col lg="6" md="6" sm="12" xs="12" className="first-index-row-img-col">
        <div className="first-index-row-img-col__main-image" />
      </Col>
    </Row>
    <Container className="services-container">
      <h3 className="services-container__header">Our services</h3>
      <Row className="services-container-row">
        <div className="col-sm-4 services-container-row-element">
          <FontAwesomeIcon className="services-container-row-element__icon" icon={faAddressCard} size="2x" color="#77C5EF"/>
          <p>Tax statements</p>
        </div>
        <div className="col-sm-4 services-container-row-element">
          <FontAwesomeIcon className="services-container-row-element__icon" icon={faCheck} size="2x" color="#77C5EF"/>
          <p>Bookkeeping tax files</p>
        </div>
        <div className="col-sm-4 services-container-row-element">
          <FontAwesomeIcon className="services-container-row-element__icon" icon={faEnvelope} size="2x" color="#77C5EF"/>
          <p>Cash flow writing</p>
        </div>
      </Row>
      <Row>
        <div className="col-sm-4 services-container-row-element">
          <FontAwesomeIcon className="services-container-row-element__icon" icon={faFile} size="2x" color="#77C5EF"/>
          <p>Recruitment management</p>
        </div>
        <div className="col-sm-4 services-container-row-element">
          <FontAwesomeIcon className="services-container-row-element__icon" icon={faPaste} size="2x" color="#77C5EF"/>
          <p>Payments of insurance contributions</p>
        </div>
        <div className="col-sm-4 services-container-row-element">
          <FontAwesomeIcon className="services-container-row-element__icon" icon={faThumbsUp} size="2x" color="#77C5EF"/>
          <p>Issuance of payroll statements</p>
        </div>
      </Row>
    </Container>
    <Row className="team-row">
      <Col lg="6" md="6" sm="12" xs="12" className="team-row-img-col">
        <div className="team-row-img-col__main-image" />
      </Col>
      <Col lg="6" md="6" sm="12" xs="12" className="team-row-text-col">
        <h5 className="team-row-text-col__text">
          We are one of the largest Accounting - Tax offices nationwide.
          Through a large team of experienced accountants we try to stand by and help him
          taxpayer through modern solutions and alternative procedures
          in order to face its tax and labor burdens. Your
          We are waiting at the accounting office to meet and solve your problems
          problems up close.
        </h5>
      </Col>
    </Row>
  </LayoutEn>
)

export default IndexPage
