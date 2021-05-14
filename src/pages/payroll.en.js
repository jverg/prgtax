import * as React from "react"
import Layout from "../components/layout.en"
import { Row, Col } from 'react-bootstrap';
import SEO from "../components/seo"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave, faCommentsDollar, faBuilding, 
  faHandHoldingUsd, faUserCheck, faUsers, faBriefcase } from '@fortawesome/free-solid-svg-icons'
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
          Payroll
        </h4>
        <h5>
        We have the know how on matters of human resources for the correct keeping of the
        payroll. Right implementation of the Labour Law is the only way to avoid penalties and
        unnecessary communications with Labour Authorities.
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
        Keeping payroll books
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faCommentsDollar} color="#77C5EF"/>
        Preparation of work contracts
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faBuilding} color="#77C5EF"/>
        Hiring, Firing and modifications on work contracts by submission to ERGANI
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faHandHoldingUsd} color="#77C5EF"/>
        Notification for the legal obligations
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faUserCheck} color="#77C5EF"/>
        Support and Consulting during audits
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faUsers} color="#77C5EF"/>
        HR Assistance
        </h5><br></br>
        <h5>
        <FontAwesomeIcon className="text-row__text__icon" icon={faBriefcase} color="#77C5EF"/>
        Specialized consulting on matters of Labour Law
        </h5><br></br>
      </Col>
      <Col md="1"></Col>
      <Col md="2" className="text-row__bluecol"></Col>
    </Row>
  </Layout>
)

export default ContactPage
