import * as React from 'react';
import PropTypes from "prop-types";
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faBuilding, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './footer.scss'

const Footer = () => (
<>
    <Row>
      <Col lg={6} sm="12" className="contact-row-footer">
        <div className="contact-row-footer-text">
          <h5> 
            <FontAwesomeIcon className="contact-row-col-icon" icon={faBuilding} color="#77C5EF"/>
            PRG, Accounting & Consulting
          </h5>
          <h5> 
            <FontAwesomeIcon className="contact-row-col-icon" icon={faMapMarkerAlt} color="#77C5EF"/>
            Vasileos Konstantinou avenue, 22, Athens
          </h5>
          <h5>
            <FontAwesomeIcon className="contact-row-col-icon" icon={faPhone} color="#77C5EF"/>
            <a href="tel:2107239745" style={{color: "black"}}>
              210 7239 745
            </a>
            <a href="tel:2144028210" style={{color: "black"}}> & 214 4028 200
            </a>
          </h5>
          <h5>
            <FontAwesomeIcon className="contact-row-col-icon" icon={faEnvelope} color="#77C5EF"/>
            <a href="mailto:info@prgtax.gr" style={{color: "black"}}>
              info@prgtax.gr
            </a>
          </h5>
          <a href="/" style={{color: "black"}}>
          <h6 className="contact-row-footer-text__pdf">
            <FontAwesomeIcon className="contact-row-col-icon__pdf" icon={faFilePdf} color="#77C5EF"/>
            Balance sheet
          </h6></a>
          <h6 className="contact-row-footer-text__power">
           PRG © {new Date().getFullYear()}
          </h6>
        </div>
      </Col>
      <Col lg={6} sm="12">
      <iframe title="PRG map" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12583.159664661336!2d23.7513826!3d37.95869104999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x96e808424a20d3ae!2sPRG%20%7C%20Accounting%20%26%20Consulting!5e0!3m2!1sel!2sgr!4v1615570893076!5m2!1sel!2sgr"
        className="contact-row__prg-map" allowFullScreen="" loading="lazy" />
      </Col> 
    </Row> 
</>
);

Footer.propTypes = {
    siteTitle: PropTypes.string,
};
  
Footer.defaultProps = {
    siteTitle: ``,
};

export default Footer;
