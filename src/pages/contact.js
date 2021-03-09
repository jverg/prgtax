import * as React from "react"
import Layout from "../components/layout"
import { Row, Col, Button } from 'react-bootstrap';
import SEO from "../components/seo"
import './styles/contact.scss'

const SecondPage = () => (
  <Layout>
    <SEO title="Επικοινωνία" />
    <Row className="contact-row">
      <Col lg={6} sm="12" className="contact-row-form-col">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className="contact-row-form-col-form">
          <label for="name">Ονομα/νυμο</label>
          <input className="contact-row-form-col-form__input" type="text" name="name" id="name" />
          <label for="email">Email</label>
          <input className="contact-row-form-col-form__input" type="email" name="email" id="email" />
          <label for="message">Σχόλια</label>
          <textarea className="contact-row-form-col-form__input" name="message" id="message" rows="5" />
          <Button className="contact-row-form-col-form__submit" variant="primary" type="submit">Αποστολή</Button>
        </form>
      </Col>
      <Col>
        <iframe title="PRG map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.2438524766203!2d23.740372315600478!3d37.97143810859265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd41cceafcc9%3A0x76e3c5a7bb856953!2zzpvOtc-Jz4YuIM6SzrHPg865zrvOrc-Jz4IgzprPic69z4PPhM6xzr3PhM6vzr3Ov8-FIDIyLCDOkc64zq7Ovc6xIDExNiAzNQ!5e0!3m2!1sel!2sgr!4v1615281930303!5m2!1sel!2sgr" 
          className="contact-row__prg-map" allowfullscreen="" loading="lazy"></iframe>
      </Col>
    </Row>
    <h1>
      </h1>
  </Layout>
)

export default SecondPage
