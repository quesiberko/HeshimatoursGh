import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Heshima-header">
        <div className="Heshima-header-group">
        <h1>Heshimatours</h1>
        <p>Car Rental & Tours</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
