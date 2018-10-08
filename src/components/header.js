import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#ffffff',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
        
          {siteTitle}
        </Link>
      </h1>
    <hr/>
   <div class="snipcart-summary" style={{float: 'right' }}><a href="#" class="snipcart-checkout" >Cart (<span class="snipcart-total-items"></span>)</a></div>

   
    </div>
  </div>
)

export default Header
