import * as React from "react"
import Layout from "../components/layout"
import { Row, Col, Button } from 'react-bootstrap';
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt, faBuilding } from '@fortawesome/free-solid-svg-icons'
import './styles/contact.scss'

const SecondPage = () => (
  <Layout>
    <SEO title="Επικοινωνία" />
    <Row className="contact-row">
      <Col lg={7} sm="12" className="contact-row-img">
        <h5>Φόρμα Επικοινωνίας</h5>
        <div classname="contact-row-img-items">
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className="contact-row-img-items-form">
            <label htmlFor="name">Ονομα/νυμο</label>
            <input className="contact-row-img-items-form__input" type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input className="contact-row-img-items-form__input" type="email" name="email" id="email" />
            <label htmlFor="message">Σχόλια</label>
            <textarea className="contact-row-img-items-form__input" name="message" id="message" rows="5" />
            <Button className="contact-row-img-items-form__submit" variant="primary" type="submit">Αποστολή</Button>
          </form>
        </div>
      </Col>
      <Col lg={5} sm="12" className="contact-row-col">
        <div>
          <h4 className="contact-row-col-text">Επικοινωνήστε μαζί μας</h4>
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
    <Row>
      <Col lg={7} sm="12" className="contact-row-footer">
        <div className="contact-row-footer-text">
          <h5> 
            <FontAwesomeIcon className="contact-row-col-icon" icon={faBuilding} color="#77C5EF"/>
            PRG, Accounting & Consulting
          </h5>
          <h5> 
            <FontAwesomeIcon className="contact-row-col-icon" icon={faMapMarkerAlt} color="#77C5EF"/>
            Λ. Βασ. Κωνσταντίνου 22, Αθήνα
          </h5>
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
      <Col lg={5} sm="12">
      <iframe title="PRG map" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12583.159664661336!2d23.7513826!3d37.95869104999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x96e808424a20d3ae!2sPRG%20%7C%20Accounting%20%26%20Consulting!5e0!3m2!1sel!2sgr!4v1615570893076!5m2!1sel!2sgr"
        className="contact-row__prg-map" allowfullscreen="" loading="lazy" />
      </Col>
    </Row>
  </Layout>
)

export default SecondPage
