/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/header.en"
import Footer from "./footer/footer.en"
import 'bootstrap/dist/css/bootstrap.min.css';

const LayoutEn = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryEn {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} lang="en"/>
      <main>{children}</main>
      <Footer />
    </>
  )
};

LayoutEn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutEn;
