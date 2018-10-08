import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
           <link id="snipcart-theme" type="text/css" href="https://cdn.snipcart.com/themes/base/snipcart.css" rel="stylesheet" />
           <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
           <script type="text/javascript" id="snipcart" data-api-key="NzYwODU5YWEtOGY2Mi00ZTZmLWIxZTItMTE1NjNhNzg5ZmQ4NjM2NzQ1NzYxNjI1MjUwMzc2" src="https://cdn.snipcart.com/scripts/snipcart.js"></script>
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
