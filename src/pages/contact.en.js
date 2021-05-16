import * as React from "react"
import Layout from "../components/layout.en"
import { Row, Col, Button } from 'react-bootstrap';
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './styles/contact.scss'

const ContactPage = () => (
  <Layout>
    <SEO title="Επικοινωνία" />
    <Row className="contact-row">
      <Col lg={6} sm="12" className="contact-row-img">
        <div className="contact-row-img-items">
          <form method="POST" action="/en/contact" netlify-honeypot="bot-field" data-netlify="true" name="contact" className="contact-row-img-items-form">
          <h5>Contact form</h5>
            <label htmlFor="name">name/surname</label>
            <input className="contact-row-img-items-form__input" type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input className="contact-row-img-items-form__input" type="email" name="email" id="email" />
            <label htmlFor="message">Comments</label>
            <textarea className="contact-row-img-items-form__input" name="message" id="message" rows="5" />
            <Button className="contact-row-img-items-form__submit" variant="primary" type="submit">Send</Button>
          </form>
        </div>
      </Col>
      <Col lg={6} sm="12" className="contact-row-col">
        <div>
          <h4 className="contact-row-col-text">Contact us</h4>
          <h5>
            <FontAwesomeIcon className="contact-row-col-icon" icon={faPhone} color="#77C5EF"/>
            (+30) 210 7239 745 & (+30) 214 4028 210
          </h5>
          <h5>
            <FontAwesomeIcon className="contact-row-col-icon" icon={faEnvelope} color="#77C5EF"/>
            info@prgtax.gr
          </h5>
        </div>
      </Col>
    </Row>
  </Layout>
)

export default ContactPage
