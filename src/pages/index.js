import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col} from 'react-bootstrap';
import './styles/index.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row className="first-index-row">
      <Col lg={6} sm="12" className="first-index-row__text-col">
        <h3>
          <StaticImage
            src="../images/prg-logo.png"
            alt="PRG logo"
            className="logo"
          /></h3>
        <h5>Λογιστικό - Φοροτεχνικό γραφέιο</h5>
      </Col>
      <Col className="first-index-row-img-col">
        <StaticImage
          className="first-index-row-img-col__main-image"
          src="../images/main-image.jpeg"
          alt="PRG logo"
        />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
