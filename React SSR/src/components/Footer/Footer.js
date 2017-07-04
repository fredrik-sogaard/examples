import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Footer = ({slug, title}) => (
  <footer className='bg-black-90 vw-100'>
    {slug &&
      <Link to={slug} className='pv5 pv6-ns w-100 mw7 center ph3 ph4-ns link no-underline db'>
        <h2 className='neuzeit-book f4 f3-ns lh-title white-60'>Next Project</h2>
        <h1 className='neuzeit-book f3 f2-ns lh-title white'>{title}</h1>
      </Link>
    }
  </footer>
)

Footer.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string
}

export default Footer
