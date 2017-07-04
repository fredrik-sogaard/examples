import React from 'react'
import PropTypes from 'prop-types'

const NoMatch = ({location}) => (
  <section className='mw7 center pt4 ph3'>
    <h4>Page Not Found</h4>
    <p>No match for <code>{location.pathname}</code></p>
  </section>
)

NoMatch.PropTypes = {
  location: PropTypes.object.isRequired
}

export default NoMatch
