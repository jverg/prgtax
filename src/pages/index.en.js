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
        </h3><br></br>
        <h4>
          “The hardest thing in the world <br></br>to understand is the income tax.”
          <br></br><br></br>
          Albert Einstein
        </h4>
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
        <h6 className="team-row-text-col__text">
          Businesses look for explicit, comprehensible and updated business consultation and
          consistent support of their needs and set targets.<br></br><br></br>
          <b className="team-row-text-col__text-bold">PRG ACCOUNTING & CONSULTING</b>
          is a Tax Accounting Consultants Company, with its head office in the business 
          center of Athens, that offers complete tax services over a wide and diverse 
          spectrum of companies, industries and individuals all over Greece.<br></br><br></br>
          <b>Our purpose is for our clients to:</b><br></br><br></br>
          <b className="team-row-text-col__text-bold">Make Profit: </b>
          We can help businesses to expand their margin of profit keeping their financial data updated 
          and well-presented. Businesses maximize their income and take better decision, based in 
          our daily, weekly or monthly reports.<br></br><br></br>
          <b className="team-row-text-col__text-bold">Save Time: </b>
          While we keep the books of our clients, Clients save their precious time focusing on more 
          productive business activities.
        </h6>
      </Col>
    </Row>
  </LayoutEn>
)

export default IndexPage
